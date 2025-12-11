"use client";
import React from 'react';

const SpotifyPlayer: React.FC = () => {
	return (
		<div className="mt-10">
			<div className="rounded-2xl p-6 w-full max-w-sm border border-gray-700/50 bg-white/5 text-white">
				<div className="text-sm text-gray-300">Spotify widget coming soon.</div>
			</div>
		</div>
	);
};

export default SpotifyPlayer;
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isLiked, setIsLiked] = useState(false);
//   const [progress, setProgress] = useState(42);
//   const [volume, setVolume] = useState(80);

//   // TODO: Replace with actual Spotify API data
//   const [currentTrack, setCurrentTrack] = useState({
//     name: "Soldiers Rage",
//     artist: "The Mechanic",
//     album: "Album Name",
//     albumArt: null, // Will be image URL from Spotify API
//     duration: 226000, // milliseconds
//     progress: 91000, // milliseconds
//     isPlaying: true
//   });

//   // Simulate progress (remove when using real API)
//   useEffect(() => {
//     if (isPlaying) {
//       const interval = setInterval(() => {
//         setProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [isPlaying]);

 
  
  
//   const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
//   const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;
//   const SPOTIFY_SCOPES = 'user-read-currently-playing user-read-playback-state user-modify-playback-state user-library-read user-library-modify';
  
//   // Function to authenticate with Spotify
//   const authenticateSpotify = () => {
//     const authUrl = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&scope=${encodeURIComponent(SPOTIFY_SCOPES)}`;
//     window.location.href = authUrl;
//   };

//   // Function to get current playing track
//   const getCurrentTrack = async (accessToken) => {
//     try {
//       const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
//         headers: {
//           'Authorization': `Bearer ${accessToken}`
//         }
//       });
      
//       if (response.status === 200) {
//         const data = await response.json();
//         setCurrentTrack({
//           name: data.item.name,
//           artist: data.item.artists[0].name,
//           album: data.item.album.name,
//           albumArt: data.item.album.images[0].url,
//           duration: data.item.duration_ms,
//           progress: data.progress_ms,
//           isPlaying: data.is_playing
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching current track:', error);
//     }
//   };

//   // Function to control playback
//   const togglePlayback = async (accessToken) => {
//     const endpoint = isPlaying ? 'pause' : 'play';
//     await fetch(`https://api.spotify.com/v1/me/player/${endpoint}`, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`
//       }
//     });
//   };

//   // Function to skip to next track
//   const skipToNext = async (accessToken) => {
//     await fetch('https://api.spotify.com/v1/me/player/next', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`
//       }
//     });
//   };

//   // Function to skip to previous track
//   const skipToPrevious = async (accessToken) => {
//     await fetch('https://api.spotify.com/v1/me/player/previous', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`
//       }
//     });
//   };

//   // Function to set volume
//   const setVolumeLevel = async (accessToken, volumePercent) => {
//     await fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volumePercent}`, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`
//       }
//     });
//   };

//   // Function to like/unlike track
//   const toggleLike = async (accessToken, trackId) => {
//     const method = isLiked ? 'DELETE' : 'PUT';
//     await fetch(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, {
//       method: method,
//       headers: {
//         'Authorization': `Bearer ${accessToken}`
//       }
//     });
//   };
  

//   const formatTime = (ms) => {
//     const totalSeconds = Math.floor(ms / 1000);
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//     // TODO: Call togglePlayback(accessToken) when API is connected
//   };

//   const handleSkipForward = () => {
//     // TODO: Call skipToNext(accessToken) when API is connected
//     console.log('Skip forward');
//   };

//   const handleSkipBack = () => {
//     // TODO: Call skipToPrevious(accessToken) when API is connected
//     console.log('Skip back');
//   };

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     // TODO: Call toggleLike(accessToken, trackId) when API is connected
//   };

//   const handleVolumeChange = (e) => {
//     setVolume(e.target.value);
//     // TODO: Call setVolumeLevel(accessToken, volume) when API is connected
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
//       <div className="bg-gradient-to-b from-[#282828] to-[#181818] rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-gray-700/50">
        
//         {/* Spotify Logo */}
//         <div className="flex items-center gap-2 mb-6">
//           <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#1DB954]">
//             <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 14.4c-.1.2-.4.3-.6.2-1.7-1-3.8-1.2-6.3-.7-.3.1-.5-.1-.6-.3-.1-.3.1-.5.3-.6 2.7-.6 5.1-.3 7 .8.2.1.3.4.2.6zm.9-2c-.2.3-.5.4-.8.2-1.9-1.2-4.8-1.5-7.1-.8-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 2.7-.8 5.9-.4 8.1 1 .3.1.4.5.2.8zm.1-2.1c-2.3-1.4-6.1-1.5-8.3-.8-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 2.5-.7 6.8-.6 9.5 1 .4.2.5.7.3 1-.2.3-.7.4-1.1.2z"/>
//           </svg>
//           <span className="text-white font-semibold text-sm">Spotify Player</span>
//         </div>

//         {/* Album Art */}
//         <div className="relative mb-6 group">
//           <div className="w-full aspect-square bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl shadow-lg overflow-hidden">
//             {currentTrack.albumArt ? (
//               <img 
//                 src={currentTrack.albumArt} 
//                 alt="Album Art" 
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center">
//                 {isPlaying && (
//                   <div className="flex items-end gap-1.5 h-20">
//                     {[0.4, 0.8, 0.5, 0.9, 0.6, 0.7, 0.85].map((height, i) => (
//                       <div
//                         key={i}
//                         className="w-2 bg-white rounded-full"
//                         style={{
//                           height: `${height * 80}px`,
//                           animation: 'soundWave 1s ease-in-out infinite',
//                           animationDelay: `${i * 0.1}s`
//                         }}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Song Info */}
//         <div className="mb-6">
//           <h2 className="text-white font-bold text-2xl mb-1 truncate">
//             {currentTrack.name}
//           </h2>
//           <p className="text-gray-400 text-sm truncate">
//             {currentTrack.artist}
//           </p>
//         </div>

//         {/* Progress Bar */}
//         <div className="mb-6">
//           <div className="relative w-full h-1.5 bg-gray-600 rounded-full overflow-hidden group cursor-pointer">
//             <div 
//               className="h-full bg-[#1DB954] rounded-full transition-all"
//               style={{ width: `${progress}%` }}
//             />
//             <div 
//               className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
//               style={{ left: `calc(${progress}% - 6px)` }}
//             />
//           </div>
//           <div className="flex justify-between text-xs text-gray-400 mt-2">
//             <span>{formatTime(currentTrack.progress)}</span>
//             <span>{formatTime(currentTrack.duration)}</span>
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="flex items-center justify-between mb-4">
//           {/* Like Button */}
//           <Heart 
//             className={`w-5 h-5 cursor-pointer transition-all ${
//               isLiked 
//                 ? 'text-[#1DB954] fill-[#1DB954]' 
//                 : 'text-gray-400 hover:text-white hover:scale-110'
//             }`}
//             onClick={handleLike}
//           />

//           {/* Playback Controls */}
//           <div className="flex items-center gap-6">
//             <SkipBack 
//               onClick={handleSkipBack}
//               className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" 
//             />
//             <button
//               onClick={handlePlayPause}
//               className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
//             >
//               {isPlaying ? (
//                 <Pause className="w-5 h-5 text-black fill-black" />
//               ) : (
//                 <Play className="w-5 h-5 text-black fill-black ml-0.5" />
//               )}
//             </button>
//             <SkipForward 
//               onClick={handleSkipForward}
//               className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" 
//             />
//           </div>

//           {/* Volume Control */}
//           <div className="flex items-center gap-2 group">
//             <Volume2 className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={volume}
//               onChange={handleVolumeChange}
//               className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
//               style={{
//                 background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${volume}%, #4B5563 ${volume}%, #4B5563 100%)`
//               }}
//             />
//           </div>
//         </div>

//         {/* API Status Indicator */}
//         <div className="text-center">
//           <p className="text-xs text-gray-500">
//             <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1.5 animate-pulse"></span>
//             Spotify API not connected
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes soundWave {
//           0%, 100% { transform: scaleY(0.5); }
//           50% { transform: scaleY(1); }
//         }
        
//         input[type="range"]::-webkit-slider-thumb {
//           appearance: none;
//           width: 12px;
//           height: 12px;
//           background: white;
//           border-radius: 50%;
//           cursor: pointer;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.3);
//         }
        
//         input[type="range"]::-moz-range-thumb {
//           width: 12px;
//           height: 12px;
//           background: white;
//           border-radius: 50%;
//           cursor: pointer;
//           border: none;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.3);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SpotifyPlayer;