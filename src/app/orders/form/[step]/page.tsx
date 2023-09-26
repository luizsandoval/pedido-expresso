import { Metadata } from 'next';

import { Form } from '@/components/pages/orders/Form';

export const metadata: Metadata = {
    title: 'Novo pedido',
};

const OrdersForm = () => <Form />;

export default OrdersForm;
