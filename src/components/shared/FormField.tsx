import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type FormFieldProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "className"
> & {
  label: string;
  errorMessage?: string;
};

const FormField = ({ label, errorMessage, ...rest }: FormFieldProps) => (
  <fieldset className="flex w-full flex-col gap-2">
    <label className="w-full font-bold">{label}</label>
    <input
      className="w-full rounded-lg border-2 border-gray-100 p-4"
      {...rest}
    />
    {errorMessage && <span className="text-sm">{errorMessage}</span>}
  </fieldset>
);

export { FormField };
