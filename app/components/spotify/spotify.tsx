"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Music } from 'lucide-react';

interface TrackInfo {
  name: string;
  artist: string;
  progressMs: number;
  durationMs: number;
  id: string;
  isPlaying: boolean;
}

const SpotifyMiniPlayer: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [trackInfo, setTrackInfo] = useState<TrackInfo>({
    name: "Not playing",
    artist: "Spotify",
    progressMs: 0,
    durationMs: 0,
    id: "",
    isPlaying: false,
  });
  const [progressPercent, setProgressPercent] = useState(0);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
  const REDIRECT_URI = typeof window !== 'undefined' ? window.location.origin : '';
  const SCOPES = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-recently-played',
    'user-library-read',
    'user-library-modify',
  ].join(' ');

  // Generate PKCE code verifier and challenge
  const generateCodeVerifier = () => {
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
  };

  const generateCodeChallenge = async (verifier: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    const base64Digest = btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
    return base64Digest;
  };

  // Authenticate with Spotify (PKCE)
  const authenticateWithSpotify = useCallback(async () => {
    if (isAuthenticating) return;
    setIsAuthenticating(true);
    
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);
    
    localStorage.setItem('spotify_code_verifier', verifier);

    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.append('client_id', CLIENT_ID);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.append('scope', SCOPES);
    authUrl.searchParams.append('code_challenge_method', 'S256');
    authUrl.searchParams.append('code_challenge', challenge);

    window.location.href = authUrl.toString();
  }, [CLIENT_ID, REDIRECT_URI, SCOPES, isAuthenticating]);

  // Exchange code for access token
  const fetchAccessToken = useCallback(async (code: string) => {
    const verifier = localStorage.getItem('spotify_code_verifier');
    if (!verifier) return;

    try {
      const response = await fetch('/api/spotify/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, verifier, redirectUri: REDIRECT_URI }),
      });

      const data = await response.json();
      if (data.access_token) {
        setAccessToken(data.access_token);
        localStorage.setItem('spotify_access_token', data.access_token);
        if (data.refresh_token) {
          localStorage.setItem('spotify_refresh_token', data.refresh_token);
        }
        // Clean up
        localStorage.removeItem('spotify_code_verifier');
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } catch (err) {
      console.error('Token fetch error:', err);
    }
  }, [REDIRECT_URI]);

  // Fetch recently played track
  const fetchRecentlyPlayed = useCallback(async (token: string) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          const recentTrack = data.items[0].track;
          const playedAt = new Date(data.items[0].played_at);
          const now = new Date();
          const diffMs = now.getTime() - playedAt.getTime();
          const diffMins = Math.floor(diffMs / 60000);
          const diffHours = Math.floor(diffMins / 60);
          const diffDays = Math.floor(diffHours / 24);

          let timeAgo = '';
          if (diffDays > 0) {
            timeAgo = `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
          } else if (diffHours > 0) {
            timeAgo = `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
          } else if (diffMins > 0) {
            timeAgo = `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
          } else {
            timeAgo = 'Just now';
          }

          // Check if track is liked
          const likedResponse = await fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${recentTrack.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const likedData = await likedResponse.json();

          setTrackInfo({
            name: recentTrack.name,
            artist: recentTrack.artists.map((a: { name: string }) => a.name).join(', ') + ` • ${timeAgo}`,
            progressMs: 0,
            durationMs: recentTrack.duration_ms,
            id: recentTrack.id,
            isPlaying: false,
          });
          setProgressPercent(0);
          setIsLiked(likedData[0] || false);
        }
      }
    } catch (err) {
      console.error('Fetch recently played error:', err);
    }
  }, []);

  // Fetch currently playing track
  const fetchCurrentTrack = useCallback(async (token: string) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 204 || response.status === 304) {
        // No track playing, fetch recently played
        await fetchRecentlyPlayed(token);
        return;
      }

      if (response.status === 200) {
        const data = await response.json();
        const track = data.item;
        
        if (!track) {
          await fetchRecentlyPlayed(token);
          return;
        }

        const progress = data.progress_ms || 0;
        const duration = track.duration_ms || 1;

        // Check if track is liked
        const likedResponse = await fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${track.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const likedData = await likedResponse.json();

        setTrackInfo({
          name: track.name,
          artist: track.artists.map((a: { name: string }) => a.name).join(', '),
          progressMs: progress,
          durationMs: duration,
          id: track.id,
          isPlaying: data.is_playing,
        });
        setProgressPercent((progress / duration) * 100);
        setIsLiked(likedData[0] || false);
      } else if (response.status === 401) {
        // Token expired
        localStorage.removeItem('spotify_access_token');
        setAccessToken(null);
      }
    } catch (err) {
      console.error('Fetch track error:', err);
    }
  }, [fetchRecentlyPlayed]);

  // Toggle like/save track
  const toggleLike = async () => {
    if (!accessToken || !trackInfo.id) return;

    try {
      const method = isLiked ? 'DELETE' : 'PUT';
      const response = await fetch(`https://api.spotify.com/v1/me/tracks?ids=${trackInfo.id}`, {
        method,
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.ok) {
        setIsLiked(!isLiked);
      }
    } catch (err) {
      console.error('Toggle like error:', err);
    }
  };

  // Handle auth redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const storedToken = localStorage.getItem('spotify_access_token');
    if (code) {
      fetchAccessToken(code);
    } else if (storedToken) {
      setAccessToken(storedToken);
    }
  }, [fetchAccessToken]);

  // Fetch track on load or when token changes
  useEffect(() => {
    if (accessToken) {
      fetchCurrentTrack(accessToken);
      const interval = setInterval(() => fetchCurrentTrack(accessToken), 3000);
      return () => clearInterval(interval);
    }
  }, [accessToken, fetchCurrentTrack]);

  // Update progress bar smoothly
  useEffect(() => {
    if (trackInfo.isPlaying && trackInfo.durationMs > 0) {
      const interval = setInterval(() => {
        setTrackInfo(prev => {
          const newProgress = prev.progressMs + 1000;
          if (newProgress >= prev.durationMs) {
            return prev;
          }
          return { ...prev, progressMs: newProgress };
        });
        setProgressPercent(prev => {
          const newPercent = prev + (100 / (trackInfo.durationMs / 1000));
          return newPercent >= 100 ? 100 : newPercent;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [trackInfo.isPlaying, trackInfo.durationMs]);

  const formatTime = (ms: number) => {
    const totalSec = Math.floor(ms / 1000);
    return `${Math.floor(totalSec / 60)}:${String(totalSec % 60).padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#121212] text-white rounded-lg px-3 py-2 flex items-center gap-2 max-w-sm">
      {/* Spotify Logo */}
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 flex-shrink-0"
        fill="#1DB954"
        aria-label="Spotify"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 14.4c-.1.2-.4.3-.6.2-1.7-1-3.8-1.2-6.3-.7-.3.1-.5-.1-.6-.3-.1-.3.1-.5.3-.6 2.7-.6 5.1-.3 7 .8.2.1.3.4.2.6zm.9-2c-.2.3-.5.4-.8.2-1.9-1.2-4.8-1.5-7.1-.8-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 2.7-.8 5.9-.4 8.1 1 .3.1.4.5.2.8zm.1-2.1c-2.3-1.4-6.1-1.5-8.3-.8-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 2.5-.7 6.8-.6 9.5 1 .4.2.5.7.3 1-.2.3-.7.4-1.1.2z" />
      </svg>

      {/* Connect or Like Button */}
      {accessToken ? (
        <Heart
          size={16}
          className={`cursor-pointer flex-shrink-0 transition-colors ${
            isLiked ? 'text-[#1DB954] fill-[#1DB954]' : 'text-gray-400 hover:text-white'
          }`}
          onClick={toggleLike}
        />
      ) : (
        <div title="Connect to Spotify">
          <Music
            size={16}
            className="text-gray-400 flex-shrink-0 cursor-pointer hover:text-[#1DB954] transition-colors"
            onClick={authenticateWithSpotify}
          />
        </div>
      )}

      {/* Track Info */}
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium truncate leading-4">{trackInfo.name}</p>
        <p className="text-[10px] text-gray-400 truncate leading-3">
          {accessToken ? trackInfo.artist : 'Click to connect Spotify'}
        </p>
      </div>

      {/* Progress */}
      <div className="w-24 flex-shrink-0">
        <div className="relative h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1DB954] rounded-full transition-all"
            style={{ width: `${Math.min(progressPercent, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
          <span>{formatTime(trackInfo.progressMs)}</span>
          <span>{formatTime(trackInfo.durationMs)}</span>
        </div>
      </div>
    </div>
  );
};

export default SpotifyMiniPlayer;