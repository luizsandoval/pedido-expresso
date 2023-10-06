import { Metadata } from 'next';

import { Title } from '@/components/shared/Title';

import { UsersList } from './components/UsersList';

export const metadata: Metadata = {
    title: 'Usuários',
};

const Users = () => (
    <>
        <Title>Usuários</Title>
        <UsersList />
    </>
);

export default Users;
