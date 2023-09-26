import { BaseResource } from './base';
import { Client } from './client';
import { Product } from './product';

export interface OrderItem {
    total: number;
    quantity: number;
    product: Omit<Product, 'photo'>;
}

export interface Order extends BaseResource {
    total: number;
    client: Client;
    items: OrderItem[];
}