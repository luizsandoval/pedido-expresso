import { NextResponse } from 'next/server';

import { GetResponse } from '@/models/api/get';
import { Client } from '@/models/client';

import { CLIENTS_COLLECTION, withGET } from '../../_lib';

export async function GET(request: Request) {
    return (NextResponse<GetResponse<Client[]>>).json(
        await withGET<Client>(request.url, CLIENTS_COLLECTION, ['cnpj', 'name']),
    );
}
