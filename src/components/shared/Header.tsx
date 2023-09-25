'use client';

import { useRouter } from 'next/navigation';
import { FiChevronLeft } from 'react-icons/fi';

export const Header = () => {
    const router = useRouter();

    return (
        <header className="mx-auto flex h-16 w-full items-center border-b-2 border-b-gray-100 bg-white px-6 py-4">
            <button
                onClick={router.back}
                className="rounded-full border-none bg-transparent p-4 transition-all hover:bg-gray-100 hover:brightness-90"
            >
                <FiChevronLeft />
            </button>
        </header>
    );
};
