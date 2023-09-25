import Image from 'next/image';

export const Header = () => (
    <header className="mx-auto flex h-16 w-full items-center justify-center border-b-2 border-b-gray-100 bg-white px-6 py-4">
        <Image src="/logo.svg" width={40} height={40} alt="truck" />
    </header>
);
