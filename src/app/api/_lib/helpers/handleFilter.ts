const handleFilter = <T>(
    searchValue: string | null,
    keys: (keyof T)[],
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
