'use client';

import { InfiniteList } from '@/components/shared/InfiniteList';
import { RenderItem } from '@/components/shared/InfiniteList';
import { FetcherKeys } from '@/constants/fetcher-keys';
import { Product } from '@/models/product';
import { get } from '@/services/products';

import { ProductListItem } from './ProductListItem';

type ProductsListProps = {
    renderItem?: RenderItem<Product>;
};

const ProductsList = ({ renderItem }: ProductsListProps) => (
    <InfiniteList
        fetcher={get}
        fetcherKey={FetcherKeys.Products}
        renderItem={({ document, key, targetRef, index }) =>
            renderItem?.({ document, key, targetRef, index }) || (
                <ProductListItem key={key} product={document} ref={targetRef} />
            )
        }
    />
);

export { ProductsList };
