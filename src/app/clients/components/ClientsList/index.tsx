'use client';

import { InfiniteList } from '@/components/shared/InfiniteList';
import { RenderItem } from '@/components/shared/InfiniteList';
import { FetcherKeys } from '@/constants/fetcher-keys';
import { GetDataFormat } from '@/models/api/get';
import { Client } from '@/models/client';
import { get } from '@/services/clients';

import { ClientListItem } from './ClientListItem';

type ClientsListProps = {
    renderItem?: RenderItem<Client>;
    clients?: GetDataFormat<Client>;
};

const ClientsList = ({ renderItem, clients }: ClientsListProps) => (
    <InfiniteList
        fetcher={get}
        initialData={clients}
        fetcherKey={FetcherKeys.Clients}
        renderItem={({ document: client, key, targetRef, index }) =>
            renderItem?.({ document: client, key, targetRef, index }) || (
                <ClientListItem key={key} client={client} ref={targetRef} />
            )
        }
    />
);

export { ClientsList };
