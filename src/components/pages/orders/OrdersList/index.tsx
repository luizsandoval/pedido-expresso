'use client';

import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

import { Card } from '@/components/shared/Card';
import { FormattedDate } from '@/components/shared/FormattedDate';
import { InfiniteList } from '@/components/shared/InfiniteList';
import { FetcherKeys } from '@/constants/fetcher-keys';
import { get } from '@/services/orders';

const OrdersList = () => (
    <InfiniteList
        fetcher={get}
        fetcherKey={FetcherKeys.Orders}
        renderItem={({ document, key, targetRef }) => (
            <Link key={key} href={`/orders/${document._id}`} className="w-full">
                <Card.Root
                    ref={targetRef}
                    shouldApplyHoverEffect
                    className="flex-row justify-between"
                >
                    <summary className="flex flex-col gap-2">
                        <h2 className="overflow-hidden text-ellipsis text-sm">
                            {document.client.name}
                        </h2>
                        <p className="text-xs font-bold text-gray-400">
                            #{document.number} •{' '}
                            <FormattedDate date={document.createdAt} />
                        </p>
                    </summary>
                    <Card.RightElement>
                        <FiChevronRight />
                    </Card.RightElement>
                </Card.Root>
            </Link>
        )}
    />
);

export { OrdersList };
