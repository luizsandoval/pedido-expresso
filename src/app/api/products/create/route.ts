import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Product } from '@/models/product';

import { Collection, withPOST } from '../../_lib';

export async function POST(request: Request) {
    return (NextResponse<ApiResponse<Product>>).json(
        await withPOST(request, Collection.Products),
    );
}
