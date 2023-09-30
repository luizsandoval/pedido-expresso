import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type RootProps = {
    shouldApplyHoverEffect?: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'>;

const Root = forwardRef<HTMLDivElement, PropsWithChildren<RootProps>>(
    ({ children, className, shouldApplyHoverEffect, onClick }, ref) => {
        const hoverEffectClasses =
            'transition-all hover:border-2 hover:bg-indigo-50';

        return (
            <div
                ref={ref}
                onClick={onClick}
                className={twMerge(
                    `relative flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-100 bg-white px-4 py-4`,
                    shouldApplyHoverEffect && hoverEffectClasses,
                    onClick && 'hover:cursor-pointer',
                    className,
                )}
            >
                {children}
            </div>
        );
    },
);

Root.displayName = 'Card.Root';

export { Root };
