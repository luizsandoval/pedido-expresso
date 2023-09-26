import { PropsWithChildren, forwardRef } from 'react';

import { Card } from '@/components/shared/Card';
import { Client } from '@/models/client';

type RootProps = {
    client: Required<Client>;
    onClick(): void;
};

const Root = forwardRef<HTMLDivElement, PropsWithChildren<RootProps>>(
    ({ client, children, onClick }, ref) => {
        const { name, cnpj } = client;

        return (
            <Card
                ref={ref}
                onClick={onClick}
                shouldApplyHoverEffect
                className="flex-row justify-between"
            >
                <summary className="flex flex-col gap-2">
                    <h2 className="text-sm">{name}</h2>
                    <p className="text-xs text-gray-400">{cnpj}</p>
                </summary>
                {children}
            </Card>
        );
    },
);

Root.displayName = 'ClientList.Card.Root';

export { Root };
