import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { OrderDetails } from '@/app/orders/components/Details';
import { getOne } from '@/services/orders';

type OrderDetailsProps = {
    params: {
        id: string;
    };
};

export async function generateMetadata({
    params,
}: OrderDetailsProps): Promise<Metadata> {
    const id = params.id;

    const order = await getOne(id);

    if (!order) notFound();

    return {
        title: `#${order?.number} ${order?.client.name}`,
    };
}

const OrderDetailsPage = async ({ params }: OrderDetailsProps) => {
    const order = await getOne(params.id);

    if (!order) notFound();

    return <OrderDetails order={order} />;
};

export default OrderDetailsPage;
