import { PropsWithChildren } from 'react';

const RightElement = ({ children }: PropsWithChildren) => (
    <div className='justify-self-end'>{children}</div>
);

export { RightElement };
