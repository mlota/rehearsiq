import axios from 'axios';
import { AccessToken, Playlist } from 'spotify-types';

// Spotify API endpoints
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/playlists';

export const getAccessToken = async (): Promise<string> => {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

	if (!clientId || !clientSecret) {
		throw new Error('Missing Spotify credentials');
	}

	try {
		const response = await axios.post<AccessToken>(
			TOKEN_ENDPOINT,
			`grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		);
		return response.data.access_token;
	} catch (error: any) {
		throw new Error(
			`Error getting access token: ${error.response?.data || error.message}`
		);
	}
};

export const getPlaylist = async (
	accessToken: string,
	playlistId: string
): Promise<Playlist> => {
	if (!playlistId) {
		throw new Error('Missing Spotify playlist id');
	}

	try {
		const response = await axios.get<Playlist>(
			`${PLAYLIST_ENDPOINT}/${playlistId}`,
			{
				headers: { Authorization: `Bearer ${accessToken}` }
			}
		);
		return response.data;
	} catch (error: any) {
		throw new Error(
			`Error getting playlist: ${error.response?.data || error.message}`
		);
	}
};
