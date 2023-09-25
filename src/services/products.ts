import { Photo, Product } from '@/models/product';

import { BaseService } from './base';
import { api } from './api';
import { ApiResponse } from '@/models/api/api-response';
import { Dispatch } from 'react';

const API = '/products';

export type UploadProgressInfo = {
    current: number;
    total: number;
    progress: number;
};

export const uploadPhoto = async (
    photo: File,
    publicId: string | null,
    onUploadProgress: Dispatch<UploadProgressInfo>,
) => {
    const formData = new FormData();

    if (publicId) formData.append('publicId', publicId);

    formData.append('photo', photo, photo.name);

    const { data } = await api.post<ApiResponse<Photo>>(
        `${API}/upload-photo`,
        formData,
        {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;

                if (total) {
                    const progress = {
                        progress: Math.round((loaded * 100) / total),
                        current: loaded / (1024 * 1024),
                        total: total / (1024 * 1024),
                    };
    
                    onUploadProgress(progress);
                }
            },
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    );

    return data.data;
};

export const { get, create, update } = BaseService<Required<Product>>(API);
