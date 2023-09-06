import { clients } from "@/__mocks/clients";

const get = () => {
  return new Promise<typeof clients>((resolve) =>
    setTimeout(() => resolve(clients), 3000),
  );
};

const getOne = (id: number) => {
  return new Promise<(typeof clients)[0] | undefined>((resolve) =>
    setTimeout(() => resolve(clients.find((order) => order.id === Number(id))), 3000),
  );
};

export { get, getOne };
