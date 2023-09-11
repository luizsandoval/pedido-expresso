import { api } from './api';

type MongoDBInsertionResponse = {
    insertedId: { $oid: string };
};

const insertOne = async <T>(document: T, collection: string) => {
    const data = {
        document: {
            ...document,
            createdAt: new Date(),
        },
        collection,
        database: process.env.MONGO_DATABASE,
        dataSource: process.env.MONGO_DATA_SOURCE,
    };

    const { data: response } = await api.post<MongoDBInsertionResponse>(
        '/insertOne',
        data,
    );

    return response.insertedId.$oid;
};

export { insertOne };
