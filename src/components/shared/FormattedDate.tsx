type FormattedDateProps = {
    date: Date;
};

const FormattedDate = ({ date }: FormattedDateProps) =>
    Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'medium',
        formatMatcher: 'best fit',
        timeStyle: 'short',
    }).format(date);

export { FormattedDate };
