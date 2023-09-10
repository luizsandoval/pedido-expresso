'use client';

import { useSearchParams } from 'next/navigation';

import { Form } from '@/components/pages/clients/Form';
import { Card } from '@/components/shared/Card';
import { Title } from '@/components/shared/Title';

const ClientForm = () => {
    const params = useSearchParams();
    const isEdit = params.has('id');

    return (
        <>
            <Title>{isEdit ? 'EDITAR' : 'CRIAR'} CLIENTE</Title>
            <Card>
                <Form />
            </Card>
        </>
    );
};
export default ClientForm;
