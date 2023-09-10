import { Metadata } from 'next';

import { ClientsList } from '@/components/pages/clients/ClientsList';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { Title } from '@/components/shared/Title';
import { Card } from '@/components/shared/Card';
import { get } from '@/services/clients';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

export const metadata: Metadata = {
    title: 'Clientes',
};

const Clients = async () => {
    const { documents } = await get();

    return (
        <>
            <Title>CLIENTES</Title>
            <Card>
                <ClientsList clients={documents} />
            </Card>
            <NavigationFooter>
                <PrimaryButton isLink href="/clients/form">
                    Criar cliente
                </PrimaryButton>
            </NavigationFooter>
        </>
    );
};

export default Clients;
