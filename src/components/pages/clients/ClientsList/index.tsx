'use client';

import { InfiniteList } from '@/components/shared/InfiniteList';
import { RenderItem } from '@/components/shared/InfiniteList';
import { FetcherKeys } from '@/constants/fetcher-keys';
import { Client } from '@/models/client';
import { get } from '@/services/clients';

import { ClientListItem } from './ClientListItem';

type ClientsListProps = {
    renderItem?: RenderItem<Client>;
};

const ClientsList = ({ renderItem }: ClientsListProps) => (
    <InfiniteList
        fetcher={get}
        fetcherKey={FetcherKeys.Clients}
        renderItem={({ document: client, key, targetRef, index }) =>
            renderItem?.({ document: client, key, targetRef, index }) || (
                <ClientListItem key={key} client={client} ref={targetRef} />
            )
        }
    />
);

export { ClientsList };
