import { Order } from '@/models/order';

import { ORDERS_COLLECTION, withGET } from '../../_lib';

export async function GET(request: Request) {
    return withGET<Order>(request, ORDERS_COLLECTION, ['client']);
}
