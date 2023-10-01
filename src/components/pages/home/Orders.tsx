import { Title } from '@/components/shared/Title';

import { OrdersList } from '../orders/OrdersList';

const Orders = () => {
    return (
        <section className="flex h-auto w-full flex-col gap-3">
            <Title>ÚLTIMOS PEDIDOS</Title>
            <OrdersList />
        </section>
    );
};

export { Orders };
