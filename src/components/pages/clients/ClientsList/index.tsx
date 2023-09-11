'use client';

import { useCallback, useEffect, useState } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { GetDataFormat } from '@/models/api/get';
import { Client } from '@/models/client';
import { get } from '@/services/clients';

import { ClientCard } from './ClientCard';

type ClientsListProps = {
    searchValue: string;
};

const ClientsList = ({ searchValue }: ClientsListProps) => {
    const [page, setPage] = useState(1);
    const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
    const [{ documents, pagination }, setResponse] = useState<
        GetDataFormat<Client>
    >({
        documents: [],
        pagination: {
            currentPage: page,
            hasNextPage: false,
            nextPage: null,
            pages: 1,
            total: 0,
        },
    } as GetDataFormat<Client>);

    const fetchNextPage = useCallback(() => {
        if (pagination?.hasNextPage && !isLoadingNextPage)
            setPage((currentPage) => currentPage + 1);
    }, [pagination?.hasNextPage, isLoadingNextPage]);

    const targetRef = useIntersectionObserver<HTMLDivElement>(
        ([target]) => {
            if (target.isIntersecting) fetchNextPage();
        },
        {
            rootMargin: '100px',
        },
    );

    useEffect(() => {
        setIsLoadingNextPage(true);

        get(page, searchValue)
            .then(({ documents, pagination }) => {
                setResponse((currentResponse) => ({
                    documents: !searchValue
                        ? [...currentResponse.documents, ...documents]
                        : documents,
                    pagination,
                }));
            })
            .finally(() => setIsLoadingNextPage(false));
    }, [page, searchValue]);

    return documents?.map((client, index) =>
        index === documents.length - 1 ? (
            <ClientCard key={client._id} client={client} ref={targetRef} />
        ) : (
            <ClientCard key={client._id} client={client} />
        ),
    );
};

export { ClientsList };
