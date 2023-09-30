import { KeyOf } from '@/models/key-of';

const handleFilter = <T>(
    searchValue: string | null,
    keys: KeyOf<T>[],
) => {
    let filter = {};

    if (searchValue)
        filter = {
            $or: keys.map((key) => ({
                [key]: {
                    $regex: searchValue,
                    $options: 'i',
                },
            })),
        };

    return filter;
};

export { handleFilter };
