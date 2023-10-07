import Image from 'next/image';
import { PropsWithChildren, forwardRef } from 'react';

import { Card } from '@/components/shared/Card';
import { FormattedCurrency } from '@/components/shared/FormattedCurrency';
import { Product } from '@/models/product';
import { twMerge } from 'tailwind-merge';

type RootProps = {
    product: Required<Product>;
    onClick?: () => void;
    className?: string;
};

const Root = forwardRef<HTMLDivElement, PropsWithChildren<RootProps>>(
    ({ product, children, className, onClick }, ref) => {
        const { name, photo, price } = product;

        return (
            <Card.Root
                ref={ref}
                onClick={onClick}
                shouldApplyHoverEffect
                className={twMerge('sm:flex-row justify-between', className)}
            >
                <summary className="flex w-full flex-1 flex-row gap-4">
                    <div className="relative h-16 w-16">
                        <Image
                            fill
                            alt={name}
                            objectFit="contain"
                            src={photo.url || ''}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="break-all text-sm">{name}</h2>
                        <p className="text-sm text-gray-400">
                            <FormattedCurrency value={price} />
                        </p>
                    </div>
                </summary>
                <Card.RightElement>{children}</Card.RightElement>
            </Card.Root>
        );
    },
);

Root.displayName = 'ProductList.Card.Root';

export { Root };
