import { Product } from '@/models/product';

import { withGET } from '../../_lib';

export async function GET(request: Request) {
    return withGET<Product>(request, 'products', ['name', 'price']);
}
