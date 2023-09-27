import { ChangeEvent, useCallback, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { IconButton } from './IconButton';

type CounterProps = {
    onChange(value: number): void;
};

const Counter = ({ onChange }: CounterProps) => {
    const [value, setValue] = useState(0);

    const onDecrease = useCallback(() => {
        setValue((currentValue) => {
            const updatedValue = currentValue - 1;

            return updatedValue;
        });
    }, []);

    const onIncrease = useCallback(() => {
        setValue((currentValue) => {
            const updatedValue = currentValue + 1;

            return updatedValue;
        });
    }, []);

    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            {
                console.log('change', event);

                onChange(Number(event.target?.value) || 0);
            },
        [onChange],
    );

    return (
        <div className="flex items-center justify-between gap-2">
            <IconButton
                className="border-2 border-solid border-violet-400 p-2 text-violet-400"
                disabled={!value}
                onClick={onDecrease}
            >
                <FiMinus />
            </IconButton>
            <input
                type="number"
                value={value}
                onChange={handleOnChange}
                className="h-8 w-8 rounded-md border-2 border-gray-300"
            />
            <IconButton
                className="border-2 border-solid border-violet-400 p-2 text-violet-400"
                onClick={onIncrease}
            >
                <FiPlus />
            </IconButton>
        </div>
    );
};

export { Counter };
