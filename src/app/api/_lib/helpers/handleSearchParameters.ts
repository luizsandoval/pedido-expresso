import { DEFAULT_RESULTS_LIMIT, DEFAULT_RESULTS_PAGE } from '..';

const handleSearchParameters = (url: string) => {
    const { searchParams } = new URL(url);

    const searchValue = searchParams.get('searchValue');

    const page = searchParams.get('page')
        ? Number(searchParams.get('page'))
        : DEFAULT_RESULTS_PAGE;

    const limit = searchParams.get('limit')
        ? Number(searchParams.get('limit'))
        : DEFAULT_RESULTS_LIMIT;

    return {
        page,
        limit,
        searchValue,
    };
};

export { handleSearchParameters };
