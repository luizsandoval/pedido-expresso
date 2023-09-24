import { Client } from '@/models/client';

import { CLIENTS_COLLECTION, withGET } from '../../_lib';

export async function GET(request: Request) {
    return withGET<Client>(request, CLIENTS_COLLECTION, ['cnpj', 'name']);
}
