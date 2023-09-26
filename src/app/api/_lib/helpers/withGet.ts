import { find } from '..';

import { KeyOf } from '@/models/key-of';

import { handleFilter, handleSearchParameters } from '.';

export async function withGET<T extends Object>(
    requestUrl: string,
    resourceName: string,
    resourceKeys: KeyOf<T>[],
) {
    try {
        const { page, limit, searchValue } = handleSearchParameters(requestUrl);

        const filter = handleFilter<T>(searchValue, resourceKeys);

        const data = await find<T>(resourceName, filter, page, limit);

        return {
            success: true,
            data,
        };
    } catch (error) {
        console.log(error);

        throw error;
    }
}
