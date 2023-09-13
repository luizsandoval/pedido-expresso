import { api } from './api';

type MongoDBCountResponse = {
    documents: [{ total: number }];
};

const count = async (
    collection: string,
    filter: Record<string, unknown> = {},
) => {
    const pipeline = [
        {
            $match: filter,
        },
        {
            $count: 'total',
        },
    ];

    const data = {
        pipeline,
        collection,
        database: process.env.MONGO_DATABASE,
        dataSource: process.env.MONGO_DATA_SOURCE,
    };

    const { data: response } = await api.post<MongoDBCountResponse>(
        '/aggregate',
        data,
    );

    return response.documents[0].total;
};

export { count };
