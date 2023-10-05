import Image from 'next/image';

import { User } from './User';

export const Header = () => (
    <header className="mx-auto relative flex h-16 min-h-max w-full items-center justify-between border-b-2 border-b-gray-100 bg-white px-6 py-4">
        <Image
            src="/logo.svg"
            width={40}
            height={40}
            title="Pedido expresso - gestão de pedidos e estoque"
            alt="Pedido expresso - gestão de pedidos e estoque"
        />
        <User />
    </header>
);
