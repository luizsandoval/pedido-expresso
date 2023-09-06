import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getOne } from "@/services/orders";
import { Container } from "@/components/core/Container";
import { Title } from "@/components/shared/Title";
import { Card } from "@/components/shared/Card";
import { FormattedCurrency } from "@/components/shared/FormattedCurrency";
import { Divider } from "@/components/shared/Divider";
import { Header } from "@/components/shared/Header";

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
      <Header />
      <Container gap={3}>
        <Title>
          DETALHES DO PEDIDO{" "}
          <span className="text-gray-400">#{order.number}</span>
        </Title>
        <Card paddingY={6}>
          <div className="flex w-full flex-col gap-2 text-sm">
            <h2 className="font-bold">Cliente</h2>
            <p>{order.client.name}</p>
          </div>
          <Divider />
          <div className="flex w-full flex-col gap-2 text-sm">
            <h2 className="font-bold">Produtos</h2>
            {order.products.map((product) => (
              <Card key={product.id} orientation="row" alignContent="between">
                <span className="font-bold">{product.quantity}x</span>
                <p className="flex-auto text-left">{product.name}</p>
                <p>
                  <FormattedCurrency value={product.total} />
                </p>
              </Card>
            ))}
            <Divider />
            <div className="flex w-full items-center justify-between gap-2 text-sm">
              <h2 className="font-bold">Total</h2>
              <p className="font-bold">
                <FormattedCurrency value={order.total} />
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default OrderDetails;
