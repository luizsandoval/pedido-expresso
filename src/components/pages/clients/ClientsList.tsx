'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Card } from '@/components/shared/Card';
import { IconButton } from '@/components/shared/IconButton';
import { Client } from '@/models/client';

type ClientsListProps = {
    clients: Client[];
};

const ClientsList = ({ clients }: ClientsListProps) => {
    const router = useRouter();

    const handleEdit = useCallback(
        ({ _id, name, cnpj }: Client) =>
            router.push(`/clients/form?_id=${_id}&name=${name}&cnpj=${cnpj}`),
        [router],
    );

    return clients.map((client) => (
        <Card
            key={client._id}
            orientation="row"
            alignContent="between"
            shouldApplyHoverEffect
        >
            <summary className="flex flex-col gap-2">
                <h2 className="text-sm">{client.name}</h2>
                <p className="text-xs text-gray-400">{client.cnpj}</p>
            </summary>
            <IconButton onClick={() => handleEdit(client)}>
                <FiChevronRight />
            </IconButton>
        </Card>
    ));
};

export { ClientsList };
