import { PropsWithChildren, forwardRef } from 'react';

type CardProps = {
    paddingY?: number;
    orientation?: 'col' | 'row';
    alignContent?: 'center' | 'between';
    shouldApplyHoverEffect?: boolean;
};

const Card = forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(
    (
        {
            children,
            paddingY = 4,
            orientation = 'col',
            alignContent = 'center',
            shouldApplyHoverEffect = false,
        },
        ref,
    ) => {
        const hoverEffectClasses = shouldApplyHoverEffect
            ? 'transition-all hover:border-2 hover:bg-indigo-50 hover:cursor-pointer'
            : '';

        return (
            <div
                ref={ref}
                className={`flex w-full flex-${orientation} items-center justify-${alignContent} gap-2 rounded-lg border-2 border-gray-100 bg-white px-4 py-${paddingY}`}
            >
                {children}
            </div>
        );
    },
);

Card.displayName = 'Card';

export { Card };
