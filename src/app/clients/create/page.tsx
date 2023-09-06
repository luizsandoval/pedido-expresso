import { Form } from "@/components/pages/clients/Form";
import { Card } from "@/components/shared/Card";
import { NavigationFooter } from "@/components/shared/NavigationFooter";
import { Title } from "@/components/shared/Title";

const CreateClient = () => {
  return (
    <>
      <Title>CRIAR CLIENTE</Title>
      <Card>
        <Form />
      </Card>
      <NavigationFooter label="Salvar" isLink href="/clients/create" />
    </>
  );
};

export default CreateClient;
