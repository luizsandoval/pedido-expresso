import { withPUT } from '../../_lib';

export async function PUT(request: Request) {
    return withPUT(request, 'clients');
}
