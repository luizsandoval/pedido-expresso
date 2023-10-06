'use client';

import { InfiniteList } from '@/components/shared/InfiniteList';
import { FetcherKeys } from '@/constants/fetcher-keys';
import { get } from '@/services/users';

import { UsersListItem } from './UsersListItem';

const UsersList = () => (
    <InfiniteList
        fetcher={get}
        fetcherKey={FetcherKeys.Users}
        renderItem={({ document, key, targetRef }) => (
            <UsersListItem key={key} user={document} ref={targetRef} />
        )}
    />
);

export { UsersList };
