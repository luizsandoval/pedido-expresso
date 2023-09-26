import Link from 'next/link';
import { forwardRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { IconButton } from '@/components/shared/IconButton';
import { Client } from '@/models/client';

import { ClientCard } from '../ClientCard';

type ClientListItemProps = {
    client: Required<Client>;
};

const ClientListItem = forwardRef<HTMLDivElement, ClientListItemProps>(
    ({ client }, ref) => {
        const { _id, name, cnpj } = client;

        const params = new URLSearchParams({
            _id,
            name,
            cnpj,
        }).toString();

        return (
            <ClientCard.Root ref={ref} client={client}>
                <Link href={`/clients/form?${params}`}>
                    <IconButton>
                        <FiChevronRight />
                    </IconButton>
                </Link>
            </ClientCard.Root>
        );
    },
);

ClientListItem.displayName = 'ClientListItem';

export { ClientListItem };
