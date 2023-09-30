import { DetailedHTMLProps, Dispatch, InputHTMLAttributes } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { IconButton } from './IconButton';

interface CounterInputProps
    extends Omit<
        DetailedHTMLProps<
            InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        'onChange' | 'value'
    > {
    min?: number;
    max?: number;
    value: number;
    onChange: Dispatch<number>;
}

const CounterInput = ({
    min = 0,
    onChange,
    value = 0,
    max = Infinity,
    ...rest
}: CounterInputProps) => (
    <div className="flex items-center justify-between gap-2">
        <IconButton
            type="button"
            className="border-2 border-solid border-violet-400 p-2 text-violet-400"
            disabled={!value}
            onClick={() => onChange(Math.max(min, value - 1))}
        >
            <FiMinus />
        </IconButton>
        <input
            type="number"
            value={value}
            onChange={(e) => {
                const newValue = parseInt(e.target.value, 10);

                if (!isNaN(newValue) && newValue >= min && newValue <= max)
                    onChange(newValue);
            }}
            min={0}
            max={max}
            className="h-8 w-8 rounded-md border-2 border-gray-300"
            {...rest}
        />
        <IconButton
            type="button"
            className="border-2 border-solid border-violet-400 p-2 text-violet-400"
            onClick={() => onChange(Math.min(max, value + 1))}
        >
            <FiPlus />
        </IconButton>
    </div>
);

export { CounterInput };
