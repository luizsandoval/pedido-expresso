'use client';

import { Metadata } from 'next';
import { useCallback, useState } from 'react';

import { ClientsList } from '@/components/pages/clients/ClientsList';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { Title } from '@/components/shared/Title';
import { Card } from '@/components/shared/Card';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SearchInput } from '@/components/shared/SearchInput';

export const metadata: Metadata = {
    title: 'Clientes',
};

const Clients = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    return (
        <>
            <Title>CLIENTES</Title>
            <Card>
                <SearchInput
                    autoFocus
                    onSearch={handleSearch}
                    placeholder="Digite para filtrar..."
                />
                <ClientsList searchValue={searchValue} />
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
