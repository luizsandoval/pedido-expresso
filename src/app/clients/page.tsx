import { Metadata } from 'next';

import { ClientsList } from '@/components/pages/clients/ClientsList';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { Title } from '@/components/shared/Title';
import { Card } from '@/components/shared/Card';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SearchInput } from '@/components/shared/SearchInput';

export const metadata: Metadata = {
    title: 'Clientes',
};

const Clients = ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    return (
        <>
            <Title>CLIENTES</Title>
            <Card>
                <SearchInput
                    autoFocus
                    placeholder="Digite para filtrar..."
                    defaultValue={searchParams['searchValue']}
                />
                <ClientsList
                    searchValue={searchParams['searchValue'] as string}
                />
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
