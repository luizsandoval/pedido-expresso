import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getOne } from '@/services/orders';
import { Title } from '@/components/shared/Title';
import { Card } from '@/components/shared/Card';
import { FormattedCurrency } from '@/components/shared/FormattedCurrency';
import { Divider } from '@/components/shared/Divider';

type OrderDetailsProps = {
    params: {
        id: number;
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

const OrderDetails = async ({ params }: OrderDetailsProps) => {
    const order = await getOne(params.id);

    if (!order) notFound();

    return (
        <>
            <Title>
                DETALHES DO PEDIDO{' '}
                <span className="text-gray-400">#{order.number}</span>
            </Title>
            <Card.Root className="py-6">
                <div className="flex w-full flex-col gap-2 text-sm">
                    <h2 className="font-bold">Cliente</h2>
                    <p>{order.client.name}</p>
                </div>
                <Divider />
                <div className="flex w-full flex-col gap-2 text-sm">
                    <h2 className="font-bold">Produtos</h2>
                    {order.products.map((product) => (
                        <Card.Root
                            key={product.id}
                            className="flex-row content-between"
                        >
                            <span className="font-bold">
                                {product.quantity}x
                            </span>
                            <p className="flex-auto text-left">
                                {product.name}
                            </p>
                            <p>
                                <FormattedCurrency value={product.total} />
                            </p>
                        </Card.Root>
                    ))}
                    <Divider />
                    <div className="flex w-full items-center justify-between gap-2 text-sm">
                        <h2 className="font-bold">Total</h2>
                        <p className="font-bold">
                            <FormattedCurrency value={order.total} />
                        </p>
                    </div>
                </div>
            </Card.Root>
        </>
    );
};

export default OrderDetails;
