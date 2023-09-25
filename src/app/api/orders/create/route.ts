import { ORDERS_COLLECTION, withPOST } from '../../_lib';

export async function POST(request: Request) {
    return withPOST(request, ORDERS_COLLECTION);
}
