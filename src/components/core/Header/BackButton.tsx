'use client';

import { usePathname, useRouter, useParams } from 'next/navigation';
import { useMemo } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const BackButton = () => {
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();

    const previousRoute = useMemo(() => {
        const routesMap = pathname.split('/');

        const lastRoute = routesMap.at(-1);

        const routeParams = Object.values(params);

        const previousRouteIndex = lastRoute ? routesMap.indexOf(lastRoute) : 1;

        let routeToGoBackIndex = previousRouteIndex;

        if (lastRoute && routeParams.includes(lastRoute)) {
            routeToGoBackIndex = routesMap.indexOf(lastRoute) - 2;
        } else {
            routeToGoBackIndex = lastRoute
                ? routesMap.indexOf(lastRoute) - 1
                : 1;
        }

        return routesMap.at(routeToGoBackIndex) || '/';
    }, [params, pathname]);

    return (
        <button
            onClick={() => router.push(`/${previousRoute}`)}
            className="rounded-full border-none bg-transparent p-4 transition-all hover:bg-gray-100 hover:brightness-90"
        >
            <FiChevronLeft />
        </button>
    );
};

export { BackButton };
