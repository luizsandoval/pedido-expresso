import Link from 'next/link';
import { forwardRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Card } from '@/components/shared/Card';
import { IconButton } from '@/components/shared/IconButton';
import { Client } from '@/models/client';

type ClientCardProps = {
    client: Required<Client>;
};

const ClientCard = forwardRef<HTMLDivElement, ClientCardProps>(
    ({ client }, ref) => {
        const { _id, name, cnpj } = client;

        const params = new URLSearchParams({
            _id,
            name,
            cnpj,
        }).toString();

        return (
            <Card
                ref={ref}
                shouldApplyHoverEffect
                className="flex-row justify-between"
            >
                <summary className="flex flex-col gap-2">
                    <h2 className="text-sm">{name}</h2>
                    <p className="text-xs text-gray-400">{cnpj}</p>
                </summary>
                <Link href={`/clients/form?${params}`}>
                    <IconButton>
                        <FiChevronRight />
                    </IconButton>
                </Link>
            </Card>
        );
    },
);

ClientCard.displayName = 'ClientCard';

export { ClientCard };
