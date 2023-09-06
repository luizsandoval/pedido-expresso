type FormattedCurrencyProps = {
  value: number;
};

const FormattedCurrency = ({ value }: FormattedCurrencyProps) =>
  Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(value);

export { FormattedCurrency };
