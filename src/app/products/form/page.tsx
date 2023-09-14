import { Form } from '@/components/pages/products/Form';
import { Card } from '@/components/shared/Card';
import { Title } from '@/components/shared/Title';
import { PageProps } from '@/models/page-props';

const ProductsForm = ({ searchParams }: PageProps) => {
    const isEdit = !!searchParams['_id'];
    return (
        <>
            <Title>{isEdit ? 'EDITAR' : 'CRIAR'} PRODUTO</Title>
            <Card>
                <Form />
            </Card>
        </>
    );
};
export default ProductsForm;
