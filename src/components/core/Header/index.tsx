import { Logo } from '@/components/core/Logo';

import { BackButton } from './BackButton';
import { User } from './User';

type HeaderProps = {
    shouldDisplayBackButton?: boolean;
};

export const Header = ({ shouldDisplayBackButton = false }: HeaderProps) => (
    <header className="relative mx-auto flex h-16 min-h-max w-full items-center justify-between border-b-2 border-b-gray-100 bg-white px-4 sm:px-6 py-4">
        <div className="flex gap-2">
            {shouldDisplayBackButton && <BackButton />}
            <Logo />
        </div>
        <User />
    </header>
);
