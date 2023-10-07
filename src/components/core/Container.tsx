import { HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({
    children,
    className,
}: PropsWithChildren<Pick<HTMLAttributes<HTMLElement>, 'className'>>) => (
    <section
        className={twMerge(`flex flex-col gap-6 px-2 sm:px-10 pb-28 pt-8`, className)}
    >
        {children}
    </section>
);

export { Container };
