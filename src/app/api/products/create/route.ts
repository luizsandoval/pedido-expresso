import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Product } from '@/models/product';

import { PRODUCTS_COLLECTION, withPOST } from '../../_lib';

export async function POST(request: Request) {
    try {
        return (NextResponse<ApiResponse<Product>>).json(
            await withPOST(request, PRODUCTS_COLLECTION),
        );
    } catch (error) {
        return NextResponse.error();
    }
}
