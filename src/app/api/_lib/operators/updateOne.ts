import { api } from './api';

type MongoDBUpdateResponse = { matchedCount: number; modifiedCount: number };

const updateOne = async <T extends Object>(
    id: string,
    document: T,
    collection: string,
) => {
    if ('_id' in document) delete document._id;

    const data = {
        filter: {
            _id: {
                $oid: id,
            },
        },
        update: {
            $set: {
                ...document,
                updatedAt: new Date(),
            },
        },
        collection,
        database: process.env.MONGO_DATABASE,
        dataSource: process.env.MONGO_DATA_SOURCE,
    };

    const { data: response } = await api.post<MongoDBUpdateResponse>(
        '/updateOne',
        data,
    );

    return response;
};

export { updateOne };
