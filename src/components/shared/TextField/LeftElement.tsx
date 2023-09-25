import { PropsWithChildren } from 'react';

const LeftElement = ({ children }: PropsWithChildren) => (
    <div className="absolute bottom-auto left-2 mx-2 text-lg text-gray-500">
        {children}
    </div>
);

export { LeftElement };
