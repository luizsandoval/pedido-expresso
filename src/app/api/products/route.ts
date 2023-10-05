import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { NextResponse } from 'next/server';

import { firebaseApp } from '@/config/firebase';
import { GetResponse } from '@/models/api/get';
import { Product } from '@/models/product';

import { Collection, withGET } from '../_lib';

export async function GET(request: Request) {
    const products = await withGET<Product>(request.url, Collection.Products, [
        'name',
        'price',
    ]);
    const storage = getStorage(firebaseApp);

    for await (const product of products.data.documents) {
        if (product.photo) {
            const storageRef = ref(storage, product.photo.publicId);
            const url = await getDownloadURL(storageRef);

            product.photo.url = url;
        }
    }

    return (NextResponse<GetResponse<Product[]>>).json(products);
}
