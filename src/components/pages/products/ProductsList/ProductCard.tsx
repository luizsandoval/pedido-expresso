import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Card } from '@/components/shared/Card';
import { IconButton } from '@/components/shared/IconButton';
import { Product } from '@/models/product';
import { FormattedCurrency } from '@/components/shared/FormattedCurrency';

type ProductCardProps = {
    product: Required<Product>;
};

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
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
            <Link className='w-full' href={`/products/form?${params}`}>
                <Card
                    ref={ref}
                    className="flex-row content-between"
                    shouldApplyHoverEffect
                >
                    <summary className="flex w-full flex-row gap-4">
                        <Image
                            width={40}
                            height={40}
                            objectFit="contain"
                            alt={product.name}
                            src={product.photo.url || ''}
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-sm">{product.name}</h2>
                            <p className="text-xs text-gray-400">
                                <FormattedCurrency value={product.price} />
                            </p>
                        </div>
                    </summary>
                    <IconButton className="text-violet-500">
                        <FiChevronRight size={20} />
                    </IconButton>
                </Card>
            </Link>
        );
    },
);

ProductCard.displayName = 'ProductCard';

export { ProductCard };
