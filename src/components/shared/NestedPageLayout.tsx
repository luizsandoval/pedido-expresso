import { PropsWithChildren } from 'react';

import { Container } from '../core/Container';

import { Header } from './Header';

const NestedPageLayout = ({ children }: PropsWithChildren) => (
    <>
        <Header />
        <Container className='gap-3'>{children}</Container>
    </>
);

export { NestedPageLayout };
