'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ProductCard } from '@/components/pages/products/ProductCard';
import { ProductsList } from '@/components/pages/products/ProductsList';
import { CounterInput } from '@/components/shared/CounterInput';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { Title } from '@/components/shared/Title';

import { StepProps } from '../models';

import { secondStepSchema } from './validationSchema';

const SecondStep = ({ onValidStateChange }: StepProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const product = searchParams.get('items') || '[]';

    const params = useMemo(
        () => new URLSearchParams(searchParams),
        [searchParams],
    );

    const { control, formState, watch, register, handleSubmit } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(secondStepSchema),
        defaultValues: {
            items: JSON.parse(product),
        },
    });

    const onSubmit = useCallback(
        ({ items }: { items: any[] }) => {
            const selectedItems = items.filter((item) => !!item.quantity);

            params.set('items', JSON.stringify(selectedItems));

            router.push(`/orders/form/3?${params.toString()}`);
        },
        [router, params],
    );

    useEffect(() => {
        register('items');
    }, [register]);

    useEffect(() => {
        onValidStateChange(formState.isValid);
    }, [formState.isValid, onValidStateChange]);

    useEffect(() => {
        const { unsubscribe } = watch(({ items }) => {
            params.set('items', JSON.stringify(items));

            router.push(`${pathname}?${params.toString()}`);
        });

        return () => unsubscribe();
    }, [params, router, pathname, watch]);

    return (
        <>
            <Title>ADICIONE OS PRODUTOS</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ProductsList
                    renderItem={({ index, document, key, targetRef }) => (
                        <ProductCard.Root
                            key={key}
                            ref={targetRef}
                            product={document}
                        >
                            <Controller
                                name={`items.${index}`}
                                control={control}
                                defaultValue={{
                                    product: document,
                                    quantity: 0,
                                }}
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <CounterInput
                                        onBlur={onBlur}
                                        onChange={(updatedValue) =>
                                            onChange({
                                                product: document,
                                                quantity: updatedValue,
                                            })
                                        }
                                        value={value?.quantity}
                                    />
                                )}
                            />
                        </ProductCard.Root>
                    )}
                />
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
