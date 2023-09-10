import { clients } from '@/__mocks/clients';
import { Client } from '@/models/client';

const get = () => {
    return new Promise<Client[]>((resolve) =>
        setTimeout(() => resolve(clients), 3000),
    );
};

const getOne = (id: number) => {
    return new Promise<Client | undefined>((resolve) =>
        setTimeout(
            () => resolve(clients.find((order) => order.id === Number(id))),
            3000,
        ),
    );
};

export { get, getOne };
