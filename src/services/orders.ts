import { orders } from "@/__mocks/orders";

const get = () => {
  return new Promise<typeof orders>((resolve) =>
    setTimeout(() => resolve(orders), 3000),
  );
};

const getOne = (id: number) => {
  return new Promise<(typeof orders)[0] | undefined>((resolve) =>
    setTimeout(() => resolve(orders.find((order) => order.id === Number(id))), 3000),
  );
};

export { get, getOne };
