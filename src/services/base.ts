import { GetResponse } from '@/models/api/get';
import { PostResponse } from '@/models/api/post';
import { ResourceWithoutBasicAttributes } from '@/models/base';

import { api } from './api';

const BaseService = <T>(route: string) => {
    const get = async (page: number, searchValue?: string) => {
        const { data } = await api.get<GetResponse<T>>(`${route}/get-all`, {
            params: {
                page,
                searchValue,
            },
        });

        return data.data;
    };

    const create = async (payload: ResourceWithoutBasicAttributes<T>) => {
        const { data } = await api.post<PostResponse<T>>(
            `${route}/create`,
            payload,
        );

        return data.data;
    };

    const update = async (
        id: string,
        payload: ResourceWithoutBasicAttributes<T>,
    ) => {
        const { data } = await api.put<PostResponse<T>>(`${route}/update`, {
            _id: id,
            ...payload,
        });

        return data.data;
    };

    return {
        get,
        create,
        update,
    };
};

export { BaseService };
