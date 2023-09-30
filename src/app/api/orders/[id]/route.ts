import { NextResponse } from 'next/server';

import { ApiResponse } from '@/models/api/api-response';
import { Order } from '@/models/order';

import { Collection, findOne } from '../../_lib';

export async function GET(_: Request, { params }: { params: { _id: string } }) {
    try {
        const { _id } = params;

        const data = await findOne<Order>(Collection.Orders, _id);

        return (NextResponse<ApiResponse<Order>>).json({
            success: true,
            data,
        });
    } catch (error) {
        console.log(error);

        throw error;
    }
}
