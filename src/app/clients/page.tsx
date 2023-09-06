import { Metadata } from "next";
import { FiChevronRight } from "react-icons/fi";

import { NavigationFooter } from "@/components/shared/NavigationFooter";
import { Title } from "@/components/shared/Title";
import { Card } from "@/components/shared/Card";
import { get } from "@/services/clients";

export const metadata: Metadata = {
  title: "Clientes",
};

const Clients = async () => {
  const clients = await get();

  return (
    <>
      <Title>CLIENTES</Title>
      <Card>
        {clients.map((client) => (
          <Card
            key={client.id}
            orientation="row"
            alignContent="between"
            shouldApplyHoverEffect
          >
            <summary className="flex flex-col gap-2">
              <h2 className="text-sm">{client.name}</h2>
              <p className="text-xs text-gray-400">{client.cnpj}</p>
            </summary>
            <FiChevronRight />
          </Card>
        ))}
      </Card>
      <NavigationFooter label="Criar cliente" isLink href="/clients/create" />
    </>
  );
};

export default Clients;
