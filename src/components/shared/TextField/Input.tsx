'use client';

import { mergeRefs } from '@/utils/mergeRefs';
import {
    DetailedHTMLProps,
    InputHTMLAttributes,
    forwardRef,
    useRef,
} from 'react';

type InputProps = Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'className' | 'ref'
>;

const Input = forwardRef((props: InputProps, ref) => {
    const innerRef = useRef<HTMLInputElement | null>();

    return (
        <input
            ref={mergeRefs([ref, innerRef])}
            className="w-full rounded-lg border-2 border-gray-100 p-4"
            {...props}
        />
    );
});

Input.displayName = 'Input';

export { Input };
