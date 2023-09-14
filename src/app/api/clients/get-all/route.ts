import { Client } from '@/models/client';

import { withGET } from '../../_lib/helpers';

export async function GET(request: Request) {
    return withGET<Client>(request, 'clients', ['cnpj', 'name']);
}
