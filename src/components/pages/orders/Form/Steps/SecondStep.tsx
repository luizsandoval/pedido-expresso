'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ClientCard } from '@/components/pages/clients/ClientCard';
import { ClientsList } from '@/components/pages/clients/ClientsList';
import { Card } from '@/components/shared/Card';
import { Counter } from '@/components/shared/Counter';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SearchInput } from '@/components/shared/SearchInput';
import { Title } from '@/components/shared/Title';
import { Client } from '@/models/client';
import { OrderItem } from '@/models/order';

import { StepProps } from './step-props';

const secondStepSchema = yup.object().shape({
    items: yup
        .array()
        .required()
        .min(1)
        .of(
            yup.object().shape({
                product: yup.object().shape({
                    _id: yup.string().required(),
                    name: yup.string().required(),
                    price: yup.number().required(),
                }),
                quantity: yup.number().required(),
            }),
        ),
});

const SecondStep = ({ onValidStateChange }: StepProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const searchValue = searchParams.get('searchValue') || '';
    const product = searchParams.get('items') || '[]';

    const { register, handleSubmit, formState, setValue, watch } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(secondStepSchema),
        defaultValues: {
            items: JSON.parse(product),
        },
    });

    const items = watch('items');

    const onSubmit = useCallback(
        ({ items }: { items: Required<OrderItem> }) => {
            const params = new URLSearchParams(searchParams);

            params.set('items', JSON.stringify(items));

            router.push(`${pathname}?${params.toString()}`);
            router.push(`/orders/form/3?${params.toString()}`);
        },
        [searchParams, router, pathname],
    );

    const handleCounterChange = useCallback(
        (product: Client, quantity: number) => {
            const hasAlreadyBeenAdded = items.some(
                (item) => item?.product._id === product._id,
            );

            if (hasAlreadyBeenAdded) {
                const updatedItems = items.map((item) => {
                    if (item?.product._id === product._id) {
                        item.quantity = quantity;
                    }
                });

                return setValue('items', updatedItems, {
                    shouldValidate: true,
                });
            }

            console.log('here am i');

            return setValue('items', [...items, { product, quantity }], {
                shouldValidate: true,
            });
        },
        [items, setValue],
    );

    useEffect(() => {
        register('items');
    }, [register]);

    useEffect(() => {
        onValidStateChange(formState.isValid);
    }, [formState.isValid, onValidStateChange]);

    return (
        <>
            <Title>ADICIONE OS PRODUTOS</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <SearchInput
                        autoFocus
                        placeholder="Digite para filtrar..."
                        defaultValue={searchValue}
                    />
                    <ClientsList
                        searchValue={searchValue}
                        renderCard={({ key, client, targetRef }) => (
                            <ClientCard.Root
                                key={key}
                                client={client}
                                ref={targetRef}
                            >
                                <Counter
                                    onChange={(value) =>
                                        handleCounterChange(client, value)
                                    }
                                />
                            </ClientCard.Root>
                        )}
                    />
                </Card>
                <NavigationFooter>
                    <PrimaryButton type="submit" disabled={!formState.isValid}>
                        Prosseguir
                    </PrimaryButton>
                </NavigationFooter>
            </form>
        </>
    );
};

export { SecondStep };
