import { NextResponse } from 'next/server';

import { GetResponse } from '@/models/api/get';

import { find } from '..';

import { handleFilter, handleSearchParameters } from '.';

export async function withGET<T extends Object>(
    request: Request,
    resourceName: string,
    resourceKeys: (keyof T)[],
) {
    try {
        const { page, limit, searchValue } = handleSearchParameters(
            request.url,
        );

        const filter = handleFilter<T>(searchValue, resourceKeys);

        const data = await find(resourceName, filter, page, limit);

        return (NextResponse<GetResponse<T>>).json({
            success: true,
            data,
        });
    } catch (error) {
        console.log(error);

        return (NextResponse<GetResponse<T>>).json({
            success: false,
            data: error,
        });
    }
}
