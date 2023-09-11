import { NextResponse } from 'next/server';

import { Client } from '@/models/client';

import { find, handleFilter, handleSearchParameters } from '../../_lib';

export async function GET(request: Request) {
    try {
        const { page, limit, searchValue } = handleSearchParameters(
            request.url,
        );

        const filter = handleFilter<Client>(searchValue, ['cnpj', 'name']);

        const data = await find('clients', filter, page, limit);

        return NextResponse.json({
            success: true,
            data,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            data: error,
        });
    }
}
