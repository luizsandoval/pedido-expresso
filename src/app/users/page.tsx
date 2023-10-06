import { Metadata } from 'next';

import { Title } from '@/components/shared/Title';

import { UsersList } from './components/UsersList';
import { get } from '@/services/users';

export const metadata: Metadata = {
    title: 'Usuários',
};

const Users = async () => {
    const users = await get(1);

    return (
        <>
            <Title>USUÁRIOS</Title>
            <UsersList users={users} />
        </>
    );
};

export default Users;
