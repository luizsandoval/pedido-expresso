import { Metadata } from 'next';

import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { Title } from '@/components/shared/Title';
import { Card } from '@/components/shared/Card';
import { ProductsList } from '@/components/pages/products/ProductsList';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SearchInput } from '@/components/shared/SearchInput';
import { PageProps } from '@/models/page-props';

export const metadata: Metadata = {
    title: 'Produtos',
};

const Products = ({
    searchParams,
}: PageProps) => {
    return (
        <>
            <Title>PRODUTOS</Title>
            <Card>
                <SearchInput
                    autoFocus
                    placeholder="Digite para filtrar..."
                    defaultValue={searchParams['searchValue']}
                />
                <ProductsList
                    searchValue={searchParams['searchValue'] as string}
                />
            </Card>
            <NavigationFooter>
                <PrimaryButton isLink href="/products/form">
                    Criar produto
                </PrimaryButton>
            </NavigationFooter>
        </>
    );
};

export default Products;
