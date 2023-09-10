'use client';
import { useEffect, useState } from 'react';

import { Client } from '@/models/client';
import { get } from '@/services/clients';

import { ClientCard } from './ClientCard';

type ClientsListProps = {
    searchValue: string;
};

const ClientsList = ({ searchValue }: ClientsListProps) => {
    const [documents, setDocuments] = useState<Client[]>([]);

    useEffect(() => {
        get(searchValue).then(({ documents }) => setDocuments(documents));
    }, [searchValue]);

    return documents.map((client) => (
        <ClientCard key={client._id} client={client} />
    ));
};

export { ClientsList };
