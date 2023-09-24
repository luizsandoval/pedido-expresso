export interface BaseResource {
    _id?: string;
    createdAt?: Date;
}

export type ResourceWithoutBasicAttributes<T> = Omit<T, '_id' | 'createdAt'>;
