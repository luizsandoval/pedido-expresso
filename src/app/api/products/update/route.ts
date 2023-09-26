import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Product } from '@/models/product';

import { PRODUCTS_COLLECTION, withPUT } from '../../_lib';

export async function PUT(request: Request) {
    try {
        return (NextResponse<ApiResponse<Product>>).json(
            await withPUT(request, PRODUCTS_COLLECTION),
        );
    } catch (error) {
        return NextResponse.error();
    }
}
