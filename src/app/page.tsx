import { Metadata } from 'next';

import { Header } from '@/components/pages/home/Header';
import { Container } from '@/components/core/Container';
import { Orders } from '@/components/pages/home/Orders';
import { Shortcuts } from '@/components/pages/home/Shortcuts';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

export const metadata: Metadata = {
    title: 'Início',
};

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <Orders />
                <Shortcuts />
                <NavigationFooter>
                    <PrimaryButton isLink href="/orders/create">
                        Criar pedido
                    </PrimaryButton>
                </NavigationFooter>
            </Container>
        </>
    );
}
