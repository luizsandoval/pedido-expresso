import Image from 'next/image';
import { PropsWithChildren, forwardRef } from 'react';

import { Card } from '@/components/shared/Card';
import { FormattedCurrency } from '@/components/shared/FormattedCurrency';
import { Product } from '@/models/product';

type RootProps = {
    product: Required<Product>;
    onClick?: () => void;
};

const Root = forwardRef<HTMLDivElement, PropsWithChildren<RootProps>>(
    ({ product, children, onClick }, ref) => {
        const { name, photo, price } = product;

        return (
            <Card.Root
                ref={ref}
                onClick={onClick}
                shouldApplyHoverEffect
                className="flex-row justify-between"
            >
                <summary className="flex w-full flex-1 flex-row gap-4">
                    <div className="relative w-16 h-16">
                        <Image
                            fill
                            alt={name}
                            objectFit="contain"
                            src={photo.url || ''}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm">{name}</h2>
                        <p className="text-xs text-gray-400">
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
