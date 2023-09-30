import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    PropsWithChildren,
} from 'react';
import { twMerge } from 'tailwind-merge';

const IconButton = ({
    children,
    className,
    ...rest
}: PropsWithChildren<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>) => (
    <button
        className={twMerge(
            'rounded-full border-none bg-transparent p-4 transition-all hover:bg-gray-100 hover:brightness-90',
            className,
        )}
        {...rest}
    >
        {children}
    </button>
);

export { IconButton };
