import { PropsWithChildren } from 'react';

const RightElement = ({ children }: PropsWithChildren) => (
    <div className="absolute bottom-auto right-2 mx-2 text-lg">{children}</div>
);

export { RightElement };
