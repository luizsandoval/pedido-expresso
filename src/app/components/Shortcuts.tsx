import Link from 'next/link';
import { FiUser, FiBox, FiUsers } from 'react-icons/fi';

import { Title } from '@/components/shared/Title';

const Shortcuts = () => (
    <section className="flex h-auto w-full flex-col gap-3">
        <Title>ATALHOS</Title>
        <nav>
            <ul className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-100 bg-white p-4">
                <li className="w-full rounded-lg border-2 border-gray-100 transition-all hover:border-2 hover:bg-indigo-50">
                    <Link
                        href="/clients"
                        className="flex w-full items-center justify-between gap-4 p-4"
                    >
                        <FiUser />
                        Clientes
                    </Link>
                </li>
                <li className="w-full rounded-lg border-2 border-gray-100 transition-all hover:border-2 hover:bg-indigo-50">
                    <Link
                        href="/products"
                        className="flex w-full items-center justify-between gap-4 p-4"
                    >
                        <FiBox />
                        Produtos
                    </Link>
                </li>
                <li className="w-full rounded-lg border-2 border-gray-100 transition-all hover:border-2 hover:bg-indigo-50">
                    <Link
                        href="/users"
                        className="flex w-full items-center justify-between gap-4 p-4"
                    >
                        <FiUsers />
                        Usuários
                    </Link>
                </li>
            </ul>
        </nav>
    </section>
);

export { Shortcuts };
