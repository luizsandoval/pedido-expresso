import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => (
  <h1 className="text-left text-lg font-bold">{children}</h1>
);

export { Title };
