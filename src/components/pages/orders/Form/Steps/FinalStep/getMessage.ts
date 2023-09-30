import { Order } from '@/models/order';
import { formatCurrency } from '@/utils/formatCurrency';

const getMessage = (order: Required<Order>) => {
    const message = `
*PocPinheiro | Novo pedido*

Olá, um novo pedido foi gerado, seguem os detalhes:

*Cliente*
${order.client.name} - ${order.client.cnpj}

*Horário*
${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}

*Items*
${order.items
    .map(
        (item) =>
            `${item.quantity}x ${item.product.name} ${formatCurrency(
                item.product.price,
            )} ${formatCurrency(item.total)}
            
            `,
    )
    .join('\n')}

*Total*
${formatCurrency(order.total)}
`;

    return message;
};

export { getMessage };
