import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Order } from '@/models/order';

import { Collection, withPOST } from '../../_lib';

export async function POST(request: Request) {
    return (NextResponse<ApiResponse<Order>>).json(
        await withPOST(request, Collection.Orders),
    );
}
