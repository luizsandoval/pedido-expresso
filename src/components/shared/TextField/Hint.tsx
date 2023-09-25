import { twMerge } from 'tailwind-merge';

type HintProps = {
    message?: string;
    className?: string;
};

const Hint = ({ message, className }: HintProps) => (
    <span className={twMerge('text-sm text-gray-400', className)}>
        {message}
    </span>
);

export { Hint };
