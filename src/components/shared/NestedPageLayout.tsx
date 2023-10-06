import { PropsWithChildren } from 'react';

import { Container } from '../core/Container';

import { Header } from '@/components/core/Header';

const NestedPageLayout = ({ children }: PropsWithChildren) => (
    <>
        <Header shouldDisplayBackButton />
        <Container className="gap-3">{children}</Container>
    </>
);

export { NestedPageLayout };
