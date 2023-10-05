import Image from 'next/image';
import { getServerSession } from 'next-auth/next';

import { NextAuthOptions } from '@/config/next-auth-options';
import { FiChevronDown } from 'react-icons/fi';

export const Header = async () => {
    const session = await getServerSession(NextAuthOptions);

    return (
        <header className="mx-auto flex h-16 min-h-max w-full items-center justify-between border-b-2 border-b-gray-100 bg-white px-6 py-4">
            <Image
                src="/logo.svg"
                width={40}
                height={40}
                title="Pedido expresso - gestão de pedidos e estoque"
                alt="Pedido expresso - gestão de pedidos e estoque"
            />
            <button className="hover:brightness-10 flex items-center gap-2">
                {session?.user?.image && (
                    <div className="relative h-8 w-8">
                        <Image
                            fill
                            className="rounded-full"
                            src={session?.user?.image}
                            objectFit="contain"
                            alt=""
                        />
                    </div>
                )}
                <div className="flex-start hidden flex-col gap-1 text-start sm:flex">
                    <span className="text-xs">{session?.user?.name}</span>
                    <span className="text-xs text-gray-400">
                        {session?.user?.email}
                    </span>
                </div>
                <FiChevronDown />
            </button>
        </header>
    );
};
