import { useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

import { OrderDetails } from '@/app/orders/components/Details';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { Client } from '@/models/client';
import { Order } from '@/models/order';
import { create } from '@/services/orders';


import { getMessage } from './getMessage';

const FinalStep = () => {
    const searchParams = useSearchParams();
    const client = JSON.parse(searchParams.get('client') || '{}') as Client;
    const items = JSON.parse(
        searchParams.get('items') || '[]',
    ) as Order['items'];

    const parsedItems = useMemo(
        () =>
            items.map((item) => {
                item.total = item.quantity * item.product.price;

                return item;
            }),
        [items],
    );

    const order = useMemo(
        () => ({
            client,
            items: parsedItems,
            total: parsedItems.reduce((acc, curr) => (acc += curr.total), 0),
        }),
        [client, parsedItems],
    );

    const handleSendOrder = useCallback(async () => {
        try {
            const createdOrder = await create(order as any);

            toast(`Pedido enviado com sucesso`, {
                type: 'success',
            });

            const message = getMessage(createdOrder);

            let url = `${process.env.NEXT_PUBLIC_WHATSAPP_API_URL}/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP_RECEIVER_PHONE_NUMBER}`;

            url += `&text=${encodeURI(message)}&app_absent=0`;

            window.open(url, '_blank');
        } catch (error) {
            console.log(error);

            toast(`Houve um problema ao enviar o pedido`, {
                type: 'error',
            });
        }
    }, [order]);

    return (
        <>
            <OrderDetails order={order} />
            <NavigationFooter>
                <PrimaryButton onClick={handleSendOrder}>
                    Enviar pedido
                </PrimaryButton>
            </NavigationFooter>
        </>
    );
};

export { FinalStep };
