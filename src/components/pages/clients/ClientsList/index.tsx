'use client';

import { useCallback, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { GetDataFormat } from '@/models/api/get';
import { Client } from '@/models/client';
import { get } from '@/services/clients';

import { ClientCard } from './ClientCard';

type ClientsListProps = {
    searchValue: string;
};

const ClientsList = ({ searchValue }: ClientsListProps) => {
    const { data, setSize, isLoading } = useSWRInfinite(
        (index, previousPageData: GetDataFormat<Required<Client>>) => {
            if (previousPageData && !previousPageData.pagination.hasNextPage)
                return null;

            return [index + 1, searchValue, 'clients'];
        },
        ([index, searchValue]) => get(index, searchValue),
    );

    const hasNextPage = useMemo(
        () => data?.at(-1)?.pagination.hasNextPage,
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

    return documents?.map((client, index) =>
        index === documents.length - 1 ? (
            <ClientCard key={client._id} client={client} ref={targetRef} />
        ) : (
            <ClientCard key={client._id} client={client} />
        ),
    );
};

export { ClientsList };
