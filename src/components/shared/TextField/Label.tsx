type LabelProps = {
    label: string;
    isRequired: boolean;
};

const Label = ({ label, isRequired }: LabelProps) => (
    <label className="w-full font-bold">
        {label}
        {isRequired && <span className="text-red-400">*</span>}
    </label>
);

export { Label };
