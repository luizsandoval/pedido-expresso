import { NextResponse } from 'next/server';

import { GetResponse } from '@/models/api/get';
import { Order } from '@/models/order';

import { Collection, withGET } from '../_lib';

export async function GET(request: Request) {
    return (NextResponse<GetResponse<Order[]>>).json(
        await withGET<Order>(request.url, Collection.Orders, [
            'client.name',
            'client.cnpj',
        ]),
    );
}
