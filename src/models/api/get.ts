import { ApiResponse } from './api-response';

export type GetDataFormat<T> = {
    documents: T[];
    pagination: {
        total: number;
        pages: number;
        nextPage: number | null;
        currentPage: number;
        hasNextPage: boolean;
    };
};

export type GetResponse<T> = ApiResponse<GetDataFormat<T>>;
