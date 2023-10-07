import { Title } from '@/components/shared/Title';

import { OrdersList } from '@/app/orders/components/OrdersList';
import { GetDataFormat } from '@/models/api/get';
import { Order } from '@/models/order';

type OrdersProps = {
    orders?: GetDataFormat<Order>;
};

const Orders = ({ orders }: OrdersProps) => {
    return (
        <section className="flex h-auto w-full flex-col gap-3">
            <Title>ÚLTIMOS PEDIDOS</Title>
            <OrdersList orders={orders} />
        </section>
    );
};

export { Orders };
