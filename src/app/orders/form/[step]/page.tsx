import { Metadata } from 'next';

import { Form } from '@/app/orders/components/Form';

export const metadata: Metadata = {
    title: 'Novo pedido',
};

const OrdersForm = () => <Form />;

export default OrdersForm;
