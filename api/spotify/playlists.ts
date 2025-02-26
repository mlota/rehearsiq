import { getAccessToken, getPlaylist } from '../../libs/api/src/lib/spotify';

export async function GET(request: Request) {
	// Get the URL from the request
	const url = new URL(request.url);

	// Extract the id from the query parameters
	const id = url.searchParams.get('id');

	// Check if ID is provided
	if (!id) {
		return Response.json({ error: 'Missing id parameter' }, { status: 400 });
	}

	const accessToken = await getAccessToken();
	const playlist = await getPlaylist(accessToken, id);

	return Response.json(playlist);
}
