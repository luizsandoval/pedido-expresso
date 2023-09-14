import { withPOST } from '../../_lib';

export async function POST(request: Request) {
    return withPOST(request, 'clients');
}
