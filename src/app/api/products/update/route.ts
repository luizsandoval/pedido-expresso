import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Product } from '@/models/product';

import { Collection, withPUT } from '../../_lib';

export async function PUT(request: Request) {
    return (NextResponse<ApiResponse<Product>>).json(
        await withPUT(request, Collection.Products),
    );
}
