import { NextResponse } from 'next/server';

import { GetResponse } from '@/models/api/get';
import { Product } from '@/models/product';

import { PRODUCTS_COLLECTION, withGET } from '../../_lib';

export async function GET(request: Request) {
    return (NextResponse<GetResponse<Product[]>>).json(
        await withGET<Product>(request.url, PRODUCTS_COLLECTION, ['name', 'price']),
    );
}
