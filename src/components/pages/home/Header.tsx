import Image from "next/image";

export const Header = () => (
  <header className="mx-auto flex h-16 items-center justify-between px-6 py-4 border-b-2 border-b-gray-100 bg-white w-full">
    <Image src="/logo.svg" width={40} height={40} alt="truck" />
    <button
        className='text-red-300 bg-transparent border-none'
    >
        SAIR
    </button>
  </header>
);
