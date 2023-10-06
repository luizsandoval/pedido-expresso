import Image from 'next/image';
import { forwardRef } from 'react';

import { Card } from '@/components/shared/Card';
import { User } from '@/models/user';

type UsersListItemProps = {
    user: User;
    onClick?: () => void;
};

const UsersListItem = forwardRef<
    HTMLDivElement,
    UsersListItemProps
>(({ user, onClick }, ref) => {
    const { name, email, image } = user;

    return (
        <Card.Root
            ref={ref}
            onClick={onClick}
            shouldApplyHoverEffect
            className="flex-row justify-between"
        >
            <summary className="flex w-full flex-1 flex-row gap-4">
                <div className="relative h-16 w-16">
                    <Image
                        fill
                        alt={name}
                        className="rounded-full"
                        objectFit="contain"
                        src={image}
                    />
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <h2 className="text-sm">{name}</h2>
                    <p className="text-xs text-gray-400">{email}</p>
                </div>
            </summary>
            <Card.RightElement>
                <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" className="peer sr-only" />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                </label>
            </Card.RightElement>
        </Card.Root>
    );
});

UsersListItem.displayName = 'UsersList.UsersListItem';

export { UsersListItem };
