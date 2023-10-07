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
import { Spinner } from '../Spinner';

const InfiniteList = <T extends BaseResource>({
    fetcher,
    renderItem,
    initialData,
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
        {
            keepPreviousData: true,
            fallbackData: initialData ? [initialData] : [],
        },
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

    if (!documents?.length)
        return <h2>Registros cadastrados aparecerão aqui...</h2>;

    if (!initialData && isLoading)
        return (
            <div className="flex w-full items-center justify-center">
                <Spinner />
            </div>
        );

    return (
        <Card.Root>
            <SearchInput
                autoFocus
                defaultValue={searchValue}
                placeholder="Digite para filtrar..."
                isLoading={isLoading}
            />
            {documents?.map((document: any, index) =>
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
