import { PropsWithChildren } from 'react';

const Root = ({ children }: PropsWithChildren) => (
    <fieldset className="relative flex w-full flex-col gap-2 transition-all">{children}</fieldset>
);

export { Root };
