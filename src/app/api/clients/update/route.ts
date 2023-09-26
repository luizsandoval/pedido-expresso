import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Client } from '@/models/client';

import { CLIENTS_COLLECTION, withPUT } from '../../_lib';

export async function PUT(request: Request) {
    return (NextResponse<ApiResponse<Client>>).json(
        await withPUT(request, CLIENTS_COLLECTION),
    );
}
