import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
      return NextResponse.json({ error: 'Missing refresh token' }, { status: 400 });
    }

    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basicAuth}`,
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Spotify refresh error:', data);
      return NextResponse.json({ error: data.error_description || data.error || 'Refresh failed' }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Refresh token error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
