'use client';

import { InfiniteList } from '@/components/shared/InfiniteList';
import { RenderItem } from '@/components/shared/InfiniteList';
import { FetcherKeys } from '@/constants/fetcher-keys';
import { GetDataFormat } from '@/models/api/get';
import { Product } from '@/models/product';
import { get } from '@/services/products';

import { ProductListItem } from './ProductListItem';

type ProductsListProps = {
    renderItem?: RenderItem<Product>;
    products?: GetDataFormat<Product>;
};

const ProductsList = ({ renderItem, products }: ProductsListProps) => (
    <InfiniteList
        fetcher={get}
        initialData={products}
        fetcherKey={FetcherKeys.Products}
        renderItem={({ document, key, targetRef, index }) =>
            renderItem?.({ document, key, targetRef, index }) || (
                <ProductListItem key={key} product={document} ref={targetRef} />
            )
        }
    />
);

export { ProductsList };
