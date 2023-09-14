import { GetResponse } from '@/models/api/get';
import { PostResponse } from '@/models/api/post';

import { api } from './api';

class BaseService<T> {
    constructor(private readonly route: string) {}

    async get(page: number, searchValue?: string) {
        const { data } = await api.get<GetResponse<T>>(
            `${this.route}/get-all`,
            {
                params: {
                    page,
                    searchValue,
                },
            },
        );

        return data.data;
    }

    async create(payload: T) {
        const { data } = await api.post<PostResponse<T>>(
            `${this.route}/create`,
            payload,
        );

        return data.data;
    }

    async update(id: string, payload: T) {
        const { data } = await api.put<PostResponse<T>>(
            `${this.route}/update`,
            {
                _id: id,
                ...payload,
            },
        );

        return data.data;
    }
}

export { BaseService };
