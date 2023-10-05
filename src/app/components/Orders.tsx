import { Title } from '@/components/shared/Title';

import { OrdersList } from '@/app/orders/components/OrdersList';

const Orders = () => {
    return (
        <section className="flex h-auto w-full flex-col gap-3">
            <Title>ÚLTIMOS PEDIDOS</Title>
            <OrdersList />
        </section>
    );
};

export { Orders };
