import { Metadata } from 'next';

import { PageProps } from '@/models/page-props';

export const metadata: Metadata = {
    title: 'Novo pedido',
};

const OrdersForm = ({ searchParams }: PageProps) => {
    const step = Number(searchParams['step']) || 1;

    switch (step) {
        case 1:
            return <h1>Primeiro passo</h1>;
        case 2:
            return <h1>Segundo passo</h1>;
        case 3:
            return <h1>Terceiro passo</h1>;
        default:
            return <h1>Terceiro passo</h1>;
    }
};
export default OrdersForm;
