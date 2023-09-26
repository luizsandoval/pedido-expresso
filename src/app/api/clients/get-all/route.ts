import { NextResponse } from 'next/server';

import { GetResponse } from '@/models/api/get';
import { Client } from '@/models/client';

import { Collection, withGET } from '../../_lib';

export async function GET(request: Request) {
    return (NextResponse<GetResponse<Client[]>>).json(
        await withGET<Client>(request.url, Collection.Clients, [
            'cnpj',
            'name',
        ]),
    );
}
