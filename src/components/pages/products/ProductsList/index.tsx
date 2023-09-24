'use client';

import { useCallback, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { GetDataFormat } from '@/models/api/get';
import { Product } from '@/models/product';
import { get } from '@/services/products';

import { ProductCard } from './ProductCard';

type ProductsListProps = {
    searchValue: string;
};

const ProductsList = ({ searchValue }: ProductsListProps) => {
    const { data, setSize, isLoading } = useSWRInfinite(
        (index, previousPageData: GetDataFormat<Required<Product>>) => {
            if (previousPageData && !previousPageData.pagination.hasNextPage)
                return null;

            return [index + 1, searchValue, 'products'];
        },
        ([index, searchValue]) => get(index, searchValue),
    );

    const hasNextPage = useMemo(
        () => data?.at(-1)?.pagination?.hasNextPage,
        [data],
    );

    const documents = useMemo(
        () => data?.flatMap((page) => page.documents),
        [data],
    );

    const fetchNextPage = useCallback(() => {
        if (!isLoading && hasNextPage)
            setSize((currentPage) => currentPage + 1);
    }, [hasNextPage, isLoading, setSize]);

    const targetRef = useIntersectionObserver<HTMLDivElement>(
        ([target]) => {
            if (target.isIntersecting) fetchNextPage();
        },
        {
            rootMargin: '100px',
        },
    );

    if (isLoading) return <h1>Carregando...</h1>;

    if (!documents?.length) return <h1>Produtos cadastrados aparecerão aqui</h1>;

    return documents?.map((product, index) =>
        index === documents.length - 1 ? (
            <ProductCard key={product._id} product={product} ref={targetRef} />
        ) : (
            <ProductCard key={product._id} product={product} />
        ),
    );
};

export { ProductsList };
