import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import { orders } from '@/__mocks/orders';
import { Title } from '@/components/shared/Title';

const Orders = () => {
  return (
    <section className="flex h-auto w-full flex-col gap-3">
      <Title>ÚLTIMOS PEDIDOS</Title>
      <nav>
        <ul className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-100 bg-white p-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="w-full gap-4 rounded-lg border-2 border-gray-100 transition-all hover:border-2 hover:bg-indigo-50"
            >
              <Link href={`/orders/${order.id}`} className="flex flex-row items-center justify-between w-full p-4">
                <summary className="flex flex-col gap-2">
                  <h2 className="overflow-hidden text-ellipsis text-sm">
                    {order.client.name}
                  </h2>
                  <p className="text-xs font-bold text-gray-400">
                    #{order.number} •{" "}
                    {Intl.DateTimeFormat("pt-BR", {
                      dateStyle: "medium",
                      formatMatcher: "best fit",
                      timeStyle: "short",
                    }).format(order.createdAt)}
                  </p>
                </summary>
                <FiChevronRight />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export { Orders };
