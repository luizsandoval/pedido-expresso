import { PropsWithChildren } from 'react';

const RightElement = ({ children }: PropsWithChildren) => (
    <div className='justify-self-end self-end sm:self-center'>{children}</div>
);

export { RightElement };
