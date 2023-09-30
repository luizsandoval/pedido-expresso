'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { GetDataFormat } from '@/models/api/get';
import { BaseResource } from '@/models/base';

import { Card } from '../Card';
import { SearchInput } from '../SearchInput';

import { InfiniteListProps } from './types';

const InfiniteList = <T extends Required<BaseResource>>({
    fetcher,
    renderItem,
    fetcherKey,
}: InfiniteListProps<T>) => {
    const searchParams = useSearchParams();
    const searchValue = useMemo(
        () => searchParams.get('searchValue') || '',
        [searchParams],
    );

    const { data, setSize, isLoading } = useSWRInfinite(
        (index, previousPageData: GetDataFormat<T>) => {
            if (previousPageData && !previousPageData.pagination.hasNextPage)
                return null;

            return [index + 1, searchValue, fetcherKey];
        },
        ([index, searchValue]) => fetcher(index, searchValue),
    );

    const hasNextPage = useMemo(
        () => data?.at(-1)?.pagination.hasNextPage,
        [data],
    );

    const documents = useMemo(
        () => data?.flatMap((page) => page.documents),
        [data],
    );

    const targetRef = useIntersectionObserver<HTMLDivElement>(
        ([target]) => {
            // if (target.isIntersecting && !isLoading && hasNextPage)
            //     setSize((currentPage) => currentPage + 1);
        },
        {
            rootMargin: '100px',
        },
    );

    if (isLoading) return <h2>Carregando...</h2>;

    if (!documents?.length)
        return <h2>Registros cadastrados aparecerão aqui...</h2>;

    return (
        <Card.Root>
            <SearchInput
                autoFocus
                defaultValue={searchValue}
                placeholder="Digite para filtrar..."
            />
            {documents?.map((document, index) =>
                renderItem({
                    key: document._id,
                    index,
                    document,
                    targetRef:
                        index === documents.length - 1 ? targetRef : undefined,
                }),
            )}
        </Card.Root>
    );
};

export { InfiniteList };

export * from './types';
