'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { FormField } from '@/components/shared/FormField';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { create, update } from '@/services/products';

const productSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    price: yup.string().required('O preço é obrigatório'),
});

type FormValues = {
    name: string;
    price: number | null;
    photo: string;
};

const Form = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { handleSubmit, register, formState } = useForm<FormValues>({
        resolver: yupResolver(productSchema),
        mode: 'onTouched',
        defaultValues: {
            name: params.get('name') || '',
            price: params.get('price') || null,
            photo: params.get('photo') || '',
        },
    });

    const onSubmit = useCallback(
        async (values: FormValues) => {
            const _id = params.get('_id');
            try {
                !_id ? await create(values) : await update(_id, values);

                router.push('/products');

                toast(`Produto ${!_id ? 'criado' : 'atualizado'} com sucesso`, {
                    type: 'success',
                });
            } catch (error) {
                toast(
                    `Houve um problema ao ${
                        !_id ? 'criar' : 'editar'
                    } o produto`,
                    {
                        type: 'error',
                    },
                );
            }
        },
        [router, params],
    );

    return (
        <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormField
                required
                autoFocus
                label="Nome"
                {...register('name')}
                errorMessage={formState.errors.name?.message}
            />
            <FormField
                required
                label="Preço"
                maskOptions={{
                    mask: '00.000.000/0000-00',
                }}
                {...register('price')}
                errorMessage={formState.errors.price?.message}
            />
            <FormField
                required
                label="Preço"
                maskOptions={{
                    mask: '00.000.000/0000-00',
                }}
                {...register('photo')}
                errorMessage={formState.errors.price?.message}
            />
            <NavigationFooter>
                <PrimaryButton type="submit" disabled={!formState.isValid}>
                    Salvar
                </PrimaryButton>
            </NavigationFooter>
        </form>
    );
};

export { Form };
