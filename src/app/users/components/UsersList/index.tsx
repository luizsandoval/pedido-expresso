'use client';

import { InfiniteList } from '@/components/shared/InfiniteList';
import { FetcherKeys } from '@/constants/fetcher-keys';
import { GetDataFormat } from '@/models/api/get';
import { User } from '@/models/user';
import { get } from '@/services/users';

import { UsersListItem } from './UsersListItem';

type UsersListProps = {
    users?: GetDataFormat<User>;
};

const UsersList = ({ users }: UsersListProps) => (
    <InfiniteList
        fetcher={get}
        initialData={users}
        fetcherKey={FetcherKeys.Users}
        renderItem={({ document, key, targetRef }) => (
            <UsersListItem key={key} user={document} ref={targetRef} />
        )}
    />
);

export { UsersList };
