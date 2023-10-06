import { Metadata } from 'next';

import { ClientsList } from '@/app/clients/components/ClientsList';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { Title } from '@/components/shared/Title';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { get } from '@/services/clients';

export const metadata: Metadata = {
    title: 'Clientes',
};

const Clients = async () => {
    const clients = await get(1);

    return (
        <>
            <Title>CLIENTES</Title>
            <ClientsList clients={clients} />
            <NavigationFooter>
                <PrimaryButton isLink href="/clients/form">
                    Criar cliente
                </PrimaryButton>
            </NavigationFooter>
        </>
    );
};

export default Clients;
