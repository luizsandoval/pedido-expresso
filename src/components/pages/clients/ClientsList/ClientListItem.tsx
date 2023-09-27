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
            <Link className='w-full' href={`/clients/form?${params}`}>
                <ClientCard.Root ref={ref} client={client}>
                    <IconButton>
                        <FiChevronRight />
                    </IconButton>
                </ClientCard.Root>
            </Link>
        );
    },
);

ClientListItem.displayName = 'ClientListItem';

export { ClientListItem };
