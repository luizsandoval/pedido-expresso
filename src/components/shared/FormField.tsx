import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import { IMask, IMaskInput } from 'react-imask';

type FormFieldProps = Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'className' | 'ref'
> & {
    label: string;
    errorMessage?: string;
    maskOptions?: IMask.AnyMaskedOptions;
};

const FormField = forwardRef<HTMLInputElement | null, FormFieldProps>(
    ({ label, errorMessage, required, maskOptions, ...rest }, ref) => (
        <fieldset className="flex w-full flex-col gap-2 transition-all">
            <label className="w-full font-bold">
                {label}
                {required && <span className="text-red-400">*</span>}
            </label>
            <IMaskInput
                {...maskOptions}
                inputRef={ref}
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
