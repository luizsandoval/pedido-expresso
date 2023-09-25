import { LegacyRef, MutableRefObject } from 'react';

const mergeRefs =
    <T = unknown>(
        refs: (MutableRefObject<T> | LegacyRef<T>)[],
    ): React.RefCallback<T> =>
    (value) =>
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref != null) {
                (ref as MutableRefObject<T | null>).current = value;
            }
        });

export { mergeRefs };
