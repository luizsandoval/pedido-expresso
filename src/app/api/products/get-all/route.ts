import { NextResponse } from 'next/server';

import { GetResponse } from '@/models/api/get';
import { Product } from '@/models/product';

import { PRODUCTS_COLLECTION, withGET } from '../../_lib';

export async function GET(request: Request) {
    try {
        return (NextResponse<GetResponse<Product[]>>).json(
            await withGET<Product>(request, PRODUCTS_COLLECTION, [
                'name',
                'price',
            ]),
        );
    } catch (error) {
        return NextResponse.error();
    }
}
