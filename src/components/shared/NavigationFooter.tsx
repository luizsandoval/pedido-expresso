import { PropsWithChildren } from 'react';

const NavigationFooter = ({ children }: PropsWithChildren) => (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto flex items-center justify-end border-t-2 border-t-gray-100 bg-white px-6 py-4">
        {children}
    </footer>
);

export { NavigationFooter };
