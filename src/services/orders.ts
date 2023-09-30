import { Apis } from '@/constants/apis';
import { ApiResponse } from '@/models/api/api-response';
import { Order } from '@/models/order';

import { api } from './api';
import { BaseService } from './base';

const getOne = async (orderId: string) => {
    const { data } = await api.get<ApiResponse<Order>>(
        `${Apis.Orders}/${orderId}`,
    );

    return data.data;
};

export const { get, create } = BaseService<Required<Order>>(Apis.Orders);

export { getOne };
