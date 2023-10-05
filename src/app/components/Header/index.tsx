import { Logo } from '@/components/core/Logo';

import { User } from './User';

export const Header = () => (
    <header className="relative mx-auto flex h-16 min-h-max w-full items-center justify-between border-b-2 border-b-gray-100 bg-white px-6 py-4">
        <Logo />
        <User />
    </header>
);
