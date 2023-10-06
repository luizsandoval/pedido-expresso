'use client';

import { useRouter } from 'next/navigation';
import { FiChevronLeft } from 'react-icons/fi';

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={router.back}
            className="rounded-full border-none bg-transparent p-4 transition-all hover:bg-gray-100 hover:brightness-90"
        >
            <FiChevronLeft />
        </button>
    );
};

export { BackButton };
