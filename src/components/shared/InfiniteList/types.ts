import { MutableRefObject, ReactNode } from 'react';

import { FetcherKeys } from '@/constants/fetcher-keys';
import { GetDataFormat } from '@/models/api/get';
import { BaseResource } from '@/models/base';

export type RenderItem<T> = (props: {
    key: string;
    index: number;
    document: Required<T>;
    targetRef?: MutableRefObject<HTMLDivElement | null>;
}) => ReactNode;

export type InfiniteListProps<T extends BaseResource> = {
    renderItem: RenderItem<T>;
    fetcher(index: number, searchValue?: string): Promise<GetDataFormat<T>>;
    fetcherKey: FetcherKeys;
};