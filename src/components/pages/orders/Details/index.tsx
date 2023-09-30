import { Card } from '@/components/shared/Card';
import { Divider } from '@/components/shared/Divider';
import { FormattedCurrency } from '@/components/shared/FormattedCurrency';
import { FormattedDate } from '@/components/shared/FormattedDate';
import { Title } from '@/components/shared/Title';
import { Order } from '@/models/order';

type OrderDetailsProps = {
    order: Order;
};

const OrderDetails = ({
    order: { number, client, items, total, createdAt },
}: OrderDetailsProps) => (
    <>
        <Title>
            DETALHES DO PEDIDO{' '}
            {number && <span className="text-gray-400">#{number}</span>}
        </Title>
        <Card.Root className="py-6">
            {createdAt && (
                <>
                    <div className="flex w-full flex-col gap-2 text-sm">
                        <h2 className="font-bold">Criado em</h2>
                        <p>
                            <FormattedDate date={createdAt} />
                        </p>
                    </div>
                    <Divider />
                </>
            )}
            <div className="flex w-full flex-col gap-2 text-sm">
                <h2 className="font-bold">Cliente</h2>
                <p>{client.name}</p>
            </div>
            <Divider />
            <div className="flex w-full flex-col gap-2 text-sm">
                <h2 className="font-bold">Produtos</h2>
                {items.map(({ product, quantity, total: productTotal }) => (
                    <Card.Root
                        key={product._id}
                        className="flex-row content-between"
                    >
                        <span className="font-bold">{quantity}x</span>
                        <p className="flex-auto text-left">{product.name}</p>
                        <p>
                            <FormattedCurrency value={productTotal} />
                        </p>
                    </Card.Root>
                ))}
                <Divider />
                <div className="flex w-full items-center justify-between gap-2 text-sm">
                    <h2 className="font-bold">Total</h2>
                    <p className="font-bold">
                        <FormattedCurrency value={total} />
                    </p>
                </div>
            </div>
        </Card.Root>
    </>
);

export { OrderDetails };
