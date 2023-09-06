import { PropsWithChildren } from "react";

type ContainerProps = {
  gap?: number;
  center?: boolean;
};

const Container = ({
  children,
  gap = 6,
}: PropsWithChildren<ContainerProps>) => (
  <section className={`flex flex-col gap-${gap} px-10 py-8`}>
    {children}
  </section>
);

export { Container };
