'use client';

import {
    ChangeEvent,
    DetailedHTMLProps,
    Dispatch,
    InputHTMLAttributes,
    useCallback,
    useRef,
} from 'react';
import { FiSearch } from 'react-icons/fi';

type SearchInputProps = Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'className' | 'placeholder'
> & {
    onSearch: Dispatch<string>;
    placeholder: string;
};

const DELAY_IN_MS = 500;

const SearchInput = ({ onSearch, placeholder, ...rest }: SearchInputProps) => {
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (timeoutId.current) clearTimeout(timeoutId.current);

            const value = event.target.value;

            const timeout = setTimeout(() => onSearch(value), DELAY_IN_MS);

            timeoutId.current = timeout;
        },
        [onSearch, timeoutId],
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
