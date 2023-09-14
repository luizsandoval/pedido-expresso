import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Card } from '@/components/shared/Card';
import { IconButton } from '@/components/shared/IconButton';
import { Product } from '@/models/product';

type ProductCardProps = {
    product: Product;
};

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
    ({ product }, ref) => {
        const { _id, name, price, photo } = product;

        return (
            <Card
                ref={ref}
                orientation="row"
                alignContent="between"
                shouldApplyHoverEffect
            >
                <summary className="flex flex-col gap-2">
                    <Image
                        width={60}
                        height={60}
                        alt={product.name}
                        src={product.photo}
                    />
                    <h2 className="text-sm">{product.name}</h2>
                    <p className="text-xs text-gray-400">{product.price}</p>
                </summary>
                <Link
                    href={`/products/form?_id=${_id}&name=${name}&price=${price}&photo=${photo}`}
                >
                    <IconButton>
                        <FiChevronRight />
                    </IconButton>
                </Link>
            </Card>
        );
    },
);

ProductCard.displayName = 'ProductCard';

export { ProductCard };
