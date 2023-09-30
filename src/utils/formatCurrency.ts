const formatCurrency = (value: number) =>
    Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
    }).format(value);

export { formatCurrency };
