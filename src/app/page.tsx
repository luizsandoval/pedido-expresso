import { Metadata } from 'next';

import { Container } from '@/components/core/Container';
import { Header } from '@/components/core/Header';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { get } from '@/services/orders';

import { Orders } from './components/Orders';
import { Shortcuts } from './components/Shortcuts';

export const metadata: Metadata = {
    title: 'Início',
};

export default async function Home() {
    const orders = await get(1);

    return (
        <>
            <Header />
            <Container>
                <Shortcuts />
                <Orders orders={orders} />
                <NavigationFooter>
                    <PrimaryButton isLink href="/orders/form/1">
                        Novo pedido
                    </PrimaryButton>
                </NavigationFooter>
            </Container>
        </>
    );
}
