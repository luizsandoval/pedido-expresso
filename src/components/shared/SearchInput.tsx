'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    useCallback,
    useRef,
} from 'react';
import { FiSearch } from 'react-icons/fi';

type SearchInputProps = Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'className' | 'placeholder'
> & {
    placeholder: string;
};

const DELAY_IN_MS = 500;

const SearchInput = ({ placeholder, ...rest }: SearchInputProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (timeoutId.current) clearTimeout(timeoutId.current);

            const value = event.target.value;

            const timeout = setTimeout(() => {
                const params = new URLSearchParams(searchParams);

                params.set('searchValue', value);

                router.push(pathname + '?' + params.toString());
            }, DELAY_IN_MS);

            timeoutId.current = timeout;
        },
        [router, pathname, searchParams, timeoutId],
    );

    return (
        <div className="relative flex w-full items-center">
            <span className="absolute bottom-auto left-2 mx-2 text-lg text-gray-500">
                <FiSearch />
            </span>
            <input
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full rounded-lg border-2 border-gray-100 bg-gray-50 p-4 pl-10"
                {...rest}
            />
        </div>
    );
};

export { SearchInput };
