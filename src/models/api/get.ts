import { ApiResponse } from './api-response';

export type GetResponse<T> = ApiResponse<{ documents: T[] }>;
