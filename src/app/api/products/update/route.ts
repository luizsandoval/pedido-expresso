import { PRODUCTS_COLLECTION, withPUT } from '../../_lib';

export async function PUT(request: Request) {
    return withPUT(request, PRODUCTS_COLLECTION);
}
