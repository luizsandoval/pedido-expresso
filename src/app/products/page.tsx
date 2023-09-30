import { Metadata } from 'next';

import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { Title } from '@/components/shared/Title';
import { ProductsList } from '@/components/pages/products/ProductsList';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

export const metadata: Metadata = {
    title: 'Produtos',
};

const Products = () => (
    <>
        <Title>PRODUTOS</Title>
        <ProductsList />
        <NavigationFooter>
            <PrimaryButton isLink href="/products/form">
                Criar produto
            </PrimaryButton>
        </NavigationFooter>
    </>
);

export default Products;
