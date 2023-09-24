import { BaseResource } from './base';

export interface Photo {
    url?: string;
    publicId?: string;
}

export interface Product extends BaseResource {
    name: string;
    price: number;
    photo?: Photo | undefined;
}
