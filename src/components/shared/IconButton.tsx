import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    PropsWithChildren,
} from 'react';

const IconButton = ({
    children,
    ...rest
}: PropsWithChildren<
    Omit<
        DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        'className'
    >
>) => (
    <button
        className="rounded-full border-none bg-transparent p-4 transition-all hover:bg-gray-100 hover:brightness-90"
        {...rest}
    >
        {children}
    </button>
);

export { IconButton };
