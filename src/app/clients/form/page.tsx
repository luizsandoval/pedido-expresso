import { Metadata } from 'next';

import { Form } from '@/components/pages/clients/Form';
import { Card } from '@/components/shared/Card';
import { Title } from '@/components/shared/Title';
import { PageProps } from '@/models/page-props';

export const metadata: Metadata = {
    title: 'Formulário de clientes',
};

const ClientForm = ({ searchParams }: PageProps) => {
    const isEdit = !!searchParams['_id'];
    return (
        <>
            <Title>{isEdit ? 'EDITAR' : 'CRIAR'} CLIENTE</Title>
            <Card.Root>
                <Form />
            </Card.Root>
        </>
    );
};
export default ClientForm;
