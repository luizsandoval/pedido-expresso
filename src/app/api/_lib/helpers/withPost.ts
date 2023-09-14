import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';

import { insertOne } from '../../_lib';

export async function withPOST(
    request: Request,
    resourceName: string,
    customBody?: Record<string, unknown>,
) {
    try {
        const payload = customBody ?? (await request.json());

        const insertedId = await insertOne(payload, resourceName);

        const data = {
            _id: insertedId,
            ...payload,
        };

        return (NextResponse<ApiResponse<typeof data>>).json({
            success: true,
            data,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.error();
    }
}
