'use client';

import { MutableRefObject, ReactNode, useCallback, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { GetDataFormat } from '@/models/api/get';
import { Client } from '@/models/client';
import { get } from '@/services/clients';

import { ClientListItem } from './ClientListItem';

type ClientsListProps = {
    searchValue: string;
    renderCard?: (props: {
        key: string;
        client: Required<Client>;
        targetRef?: MutableRefObject<HTMLDivElement | null>;
    }) => ReactNode;
};

const ClientsList = ({
    searchValue,
    renderCard: customRenderCard,
}: ClientsListProps) => {
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

    const targetRef = useIntersectionObserver<HTMLDivElement>(
        ([target]) => {
            // if (target.isIntersecting) {
            //     fetchNextPage();
            // }
        },
        {
            rootMargin: '100px',
        },
    );

    const fetchNextPage = useCallback(() => {
        if (!isLoading && hasNextPage)
            setSize((currentPage) => currentPage + 1);
    }, [hasNextPage, isLoading, setSize]);

    const renderCard = useCallback(
        (
            client: Required<Client>,
            ref?: MutableRefObject<HTMLDivElement | null>,
        ) =>
            customRenderCard ? (
                customRenderCard({ key: client._id, client, targetRef: ref })
            ) : (
                <ClientListItem
                    key={client._id}
                    client={client}
                    ref={targetRef}
                />
            ),
        [customRenderCard, targetRef],
    );

    if (isLoading) return <h1>Carregando...</h1>;

    return documents?.map((client, index) =>
        index === documents.length - 1
            ? renderCard(client, targetRef)
            : renderCard(client),
    );
};

export { ClientsList };
