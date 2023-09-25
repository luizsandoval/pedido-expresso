import { Client } from '@/models/client';

import { BaseService } from './base';

export const { get, create, update } =
    BaseService<Required<Client>>('/clients');
