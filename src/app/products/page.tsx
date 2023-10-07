import { Metadata } from 'next';

import { ProductsList } from '@/app/products/components/ProductsList';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { Title } from '@/components/shared/Title';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { get } from '@/services/products';

export const metadata: Metadata = {
    title: 'Produtos',
};

const Products = async () => {
    const products = await get(1);

    return (
        <>
            <Title>PRODUTOS</Title>
            <ProductsList products={products} />
            <NavigationFooter>
                <PrimaryButton isLink href="/products/form">
                    Criar produto
                </PrimaryButton>
            </NavigationFooter>
        </>
    );
};

export default Products;
