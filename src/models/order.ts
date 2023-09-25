import { BaseResource } from './base';
import { Product } from './product';

export interface Item {
    product: Product;
    quantity: number;
    total: number;
}

export interface Order extends BaseResource {
    client: string;
    items: Item[];
    total: number;
}