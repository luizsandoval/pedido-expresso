import { Metadata } from "next";

import { Header } from "@/components/pages/home/Header";
import { Container } from "@/components/core/Container";
import { Orders } from "@/components/pages/home/Orders";
import { Shortcuts } from "@/components/pages/home/Shortcuts";
import { NavigationFooter } from "@/components/shared/NavigationFooter";

export const metadata: Metadata = {
  title: "Início",
};

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Orders />
        <Shortcuts />
        <NavigationFooter label="Criar pedido" href="/orders/create" />
      </Container>
    </>
  );
}
