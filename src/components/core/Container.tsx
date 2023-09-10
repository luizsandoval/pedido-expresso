import { PropsWithChildren } from "react";

type ContainerProps = {
  gap?: number;
  center?: boolean;
};

const Container = ({
  children,
  gap = 6,
}: PropsWithChildren<ContainerProps>) => (
  <section className={`flex flex-col gap-${gap} px-10 pt-8 pb-28`}>
    {children}
  </section>
);

export { Container };
