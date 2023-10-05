import { Metadata } from 'next';

import { Container } from '@/components/core/Container';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { Shortcuts } from './components/Shortcuts';

export const metadata: Metadata = {
    title: 'Início',
};

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <Shortcuts />
                <Orders />
                <NavigationFooter>
                    <PrimaryButton isLink href="/orders/form/1">
                        Novo pedido
                    </PrimaryButton>
                </NavigationFooter>
            </Container>
        </>
    );
}
