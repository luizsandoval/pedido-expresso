import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = {
    shouldApplyHoverEffect?: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

const Card = forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(
    ({ children, className, shouldApplyHoverEffect = false }, ref) => {
        const hoverEffectClasses = shouldApplyHoverEffect
            ? 'transition-all hover:border-2 hover:bg-indigo-50 hover:cursor-pointer'
            : '';

        return (
            <div
                ref={ref}
                className={twMerge(
                    `flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-100 bg-white px-4 py-4`,
                    hoverEffectClasses,
                    className,
                )}
            >
                {children}
            </div>
        );
    },
);

Card.displayName = 'Card';

export { Card };
