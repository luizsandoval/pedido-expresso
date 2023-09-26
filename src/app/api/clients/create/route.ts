import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Client } from '@/models/client';

import { CLIENTS_COLLECTION, withPOST } from '../../_lib';

export async function POST(request: Request) {
    return (NextResponse<ApiResponse<Client>>).json(
        await withPOST(request, CLIENTS_COLLECTION),
    );
}
