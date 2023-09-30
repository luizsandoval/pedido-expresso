import { Metadata } from 'next';

import { ClientsList } from '@/components/pages/clients/ClientsList';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { Title } from '@/components/shared/Title';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

export const metadata: Metadata = {
    title: 'Clientes',
};

const Clients = () => (
    <>
        <Title>CLIENTES</Title>
        <ClientsList />
        <NavigationFooter>
            <PrimaryButton isLink href="/clients/form">
                Criar cliente
            </PrimaryButton>
        </NavigationFooter>
    </>
);

export default Clients;
