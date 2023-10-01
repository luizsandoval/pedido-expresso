import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Order } from '@/models/order';

import { Collection, findOne } from '../../_lib';

export async function GET(_: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        const data = await findOne<Order>(Collection.Orders, id);

        return (NextResponse<ApiResponse<Order>>).json({
            success: true,
            data,
        });
    } catch (error) {
        console.log(error);

        throw error;
    }
}
