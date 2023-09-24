import { Product } from '@/models/product';

import { PRODUCTS_COLLECTION, withGET } from '../../_lib';

export async function GET(request: Request) {
    return withGET<Product>(request, PRODUCTS_COLLECTION, ['name', 'price']);
}
