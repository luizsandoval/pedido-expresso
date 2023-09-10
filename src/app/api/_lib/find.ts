import { api } from './api';

type MongoDBFindResponse<T> = {
    documents: T[];
};

const find = async <T>(
    collection: string,
    filter: Record<string, unknown> = {},
) => {
    const data = {
        filter,
        collection,
        sort: { _id: -1 },
        database: process.env.MONGO_DATABASE,
        dataSource: process.env.MONGO_DATA_SOURCE,
    };

    const { data: response } = await api.post<MongoDBFindResponse<T>>(
        '/find',
        data,
    );

    return response;
};

export { find };
