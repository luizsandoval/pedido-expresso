'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

const User = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonOffsetY = useRef<number>(0);
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    const toggleMenu = useCallback(
        () => setIsOpen((currentValue) => !currentValue),
        [],
    );

    useEffect(() => {
        if (buttonRef.current)
            buttonOffsetY.current =
                buttonRef.current.clientHeight + buttonRef.current.offsetTop;
    }, []);

    return (
        <>
            <button
                onClick={toggleMenu}
                className="hover:brightness-10 flex items-center gap-2"
                ref={buttonRef}
            >
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
            {isOpen && (
                <div
                    className={twMerge(
                        'absolute right-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                        `top-${Math.floor(buttonOffsetY.current / 4)}`,
                    )}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                    onClick={() => setIsOpen(false)}
                >
                    <div className="py-1" role="none">
                        <button
                            type="button"
                            onClick={() => signOut()}
                            className="block w-full px-4 py-2 text-left text-sm text-red-300"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-3"
                        >
                            Sair
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export { User };
