import { PropsWithChildren } from "react";

import { Header } from "@/components/shared/Header";
import { Container } from "@/components/core/Container";

const ClientsLayout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    <Container gap={3}>{children}</Container>
  </>
);

export default ClientsLayout;
