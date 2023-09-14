import { Product } from '@/models/product';

import { BaseService } from './base';

export const { get, create, update } = new BaseService<Product>('/products');
