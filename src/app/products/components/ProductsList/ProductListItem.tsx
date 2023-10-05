import Link from 'next/link';
import { forwardRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { IconButton } from '@/components/shared/IconButton';
import { Product } from '@/models/product';

import { ProductCard } from '../ProductCard';

type ProductListItemProps = {
    product: Required<Product>;
};

const ProductListItem = forwardRef<HTMLDivElement, ProductListItemProps>(
    ({ product }, ref) => {
        const { _id, name, price, photo } = product;

        const params = new URLSearchParams({
            _id,
            name,
            price: price.toString(),
            'photo.url': photo?.url || '',
            'photo.publicId': photo?.publicId || '',
        }).toString();

        return (
            <Link className="w-full" href={`/products/form?${params}`}>
                <ProductCard.Root ref={ref} product={product}>
                    <IconButton>
                        <FiChevronRight />
                    </IconButton>
                </ProductCard.Root>
            </Link>
        );
    },
);

ProductListItem.displayName = 'ProductListItem';

export { ProductListItem };
