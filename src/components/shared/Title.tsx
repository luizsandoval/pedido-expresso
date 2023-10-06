import { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => (
    <h1 className="text-left text-lg font-bold lowercase first-letter:capitalize">
        {children}
    </h1>
);

export { Title };
