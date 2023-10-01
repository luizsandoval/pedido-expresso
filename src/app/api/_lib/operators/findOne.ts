import { api } from './api';

type MongoDBFindResponse<T> = {
    document: T;
};

const findOne = async <T>(collection: string, resourceId: string) => {
    const data = {
        filter: {
            _id: {
                $oid: resourceId,
            },
        },
        collection,
        database: process.env.MONGO_DATABASE,
        dataSource: process.env.MONGO_DATA_SOURCE,
    };

    const response = await api.post<MongoDBFindResponse<T>>('/findOne', data);

    return response.data.document;
};

export { findOne };
