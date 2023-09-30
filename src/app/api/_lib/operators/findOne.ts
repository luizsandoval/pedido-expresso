import { api } from './api';

type MongoDBFindResponse<T> = {
    documents: T[];
};

const findOne = async <T>(collection: string, resourceId: string) => {
    const data = {
        filter: {
            _id: resourceId,
        },
        collection,
        database: process.env.MONGO_DATABASE,
        dataSource: process.env.MONGO_DATA_SOURCE,
    };

    const document = await api.post<MongoDBFindResponse<T>>('/findOne', data);

    return document;
};

export { findOne };
