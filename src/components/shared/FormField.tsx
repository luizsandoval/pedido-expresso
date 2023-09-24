'use client';

import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import { IMask, IMaskInput } from 'react-imask';

type FormFieldProps = Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'className' | 'ref'
> & {
    label: string;
    errorMessage?: string;
    maskOptions?: IMask.AnyMaskedOptions & { unmask?: boolean };
};

const FormField = forwardRef<HTMLInputElement | null, FormFieldProps>(
    (
        { label, errorMessage, required, maskOptions, onChange, ...rest },
        ref,
    ) => (
        <fieldset className="flex w-full flex-col gap-2 transition-all">
            <label className="w-full font-bold">
                {label}
                {required && <span className="text-red-400">*</span>}
            </label>
            <IMaskInput
                {...maskOptions}
                inputRef={ref}
                onAccept={(e) =>
                    onChange && onChange({ target: { value: Number(e || 0) } })
                }
                onChange={onChange}
                className="w-full rounded-lg border-2 border-gray-100 p-4"
                {...rest}
            />
            {errorMessage && (
                <span className="text-sm text-red-400">{errorMessage}</span>
            )}
        </fieldset>
    ),
);

FormField.displayName = 'FormField';

export { FormField };
