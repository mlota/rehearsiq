// import { getAccessToken } from '@rehearsiq/api';
import { getAccessToken } from '../../libs/api/src/lib/spotify';

export async function GET(request: Request) {
	const accessToken = await getAccessToken();
	return new Response(accessToken);
}
