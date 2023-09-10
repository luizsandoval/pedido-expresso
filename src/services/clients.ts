import { GetResponse } from '@/models/api/get';
import { PostResponse } from '@/models/api/post';
import { Client } from '@/models/client';

import { api } from './api';

const get = async (searchValue?: string) => {
    const { data } = await api.get<GetResponse<Client>>('/clients/get-all', {
        params: {
            searchValue,
        },
    });

    return data.data;
};

const create = async (client: Client) => {
    const { data } = await api.post<PostResponse<Client>>(
        '/clients/create',
        client,
    );

    return data.data;
};

const update = async (id: string, client: Client) => {
    const { data } = await api.put<PostResponse<Client>>('/clients/update', {
        _id: id,
        ...client,
    });

    return data.data;
};

export { get, create, update };
