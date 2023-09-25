import { CLIENTS_COLLECTION, withPUT } from '../../_lib';

export async function PUT(request: Request) {
    return withPUT(request, CLIENTS_COLLECTION);
}
