import { count } from '..';
import { api } from './api';

type MongoDBFindResponse<T> = {
    documents: T[];
};

const find = async <T>(
    collection: string,
    filter: Record<string, unknown> = {},
    page = 1,
    limit = 5,
) => {
    const skip = (page - 1) * limit;

    const data = {
        skip,
        limit,
        filter,
        collection,
        sort: { _id: -1 },
        database: process.env.MONGO_DATABASE,
        dataSource: process.env.MONGO_DATA_SOURCE,
    };

    const getDocuments = api.post<MongoDBFindResponse<T>>('/find', data);

    const getTotal = count(collection, filter);

    const [{ data: documents }, total] = await Promise.all([
        getDocuments,
        getTotal,
    ]);

    const pages = Math.ceil(total / limit);
    const hasNextPage = page < pages;
    const nextPage = hasNextPage ? page + 1 : null;

    const response = {
        documents: documents.documents || [],
        pagination: { pages, total, hasNextPage, nextPage, currentPage: page },
    };

    return response;
};

export { find };
