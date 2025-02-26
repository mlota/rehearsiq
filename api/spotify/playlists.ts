import { getAccessToken } from '@rehearsiq/api';

export async function GET(request: Request) {
	const accessToken = await getAccessToken();
	return new Response(accessToken);
}
