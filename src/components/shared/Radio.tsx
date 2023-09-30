import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import { FiCheck } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

type RadioProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    isChecked: boolean;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ isChecked, ...rest }) => (
        <div
            className={twMerge(
                'flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 transition',
                isChecked && 'border-none bg-violet-500 text-white',
            )}
        >
            <input hidden type="radio" checked={isChecked} {...rest} />
            {isChecked && <FiCheck size={16} />}
        </div>
    ),
);

Radio.displayName = 'Radio';

export { Radio };
