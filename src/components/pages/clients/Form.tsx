'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { cnpj } from 'cpf-cnpj-validator';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { create, update } from '@/services/clients';
import { TextField } from '@/components/shared/TextField';

const clientSchema = yup.object().shape({
    name: yup.string().required('A razão social é obrigatória'),
    cnpj: yup
        .string()
        .required('O CNPJ é obrigatório')
        .test(
            'cnpj',
            'CNPJ inválido',
            (value) => !!value && cnpj.isValid(value),
        ),
});

type FormValues = {
    name: string;
    cnpj: string;
};

const Form = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { handleSubmit, register, formState } = useForm({
        resolver: yupResolver(clientSchema),
        mode: 'onTouched',
        defaultValues: {
            name: params.get('name') || '',
            cnpj: params.get('cnpj') || '',
        },
    });

    const onSubmit = useCallback(
        async (values: FormValues) => {
            const _id = params.get('_id');
            try {
                !_id ? await create(values) : await update(_id, values);

                router.push('/clients');

                toast(`Cliente ${!_id ? 'criado' : 'atualizado'} com sucesso`, {
                    type: 'success',
                });
            } catch (error) {
                toast(
                    `Houve um problema ao ${
                        !_id ? 'criar' : 'editar'
                    } o cliente`,
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
            <TextField.Root>
                <TextField.Label label="Razão social" isRequired />
                <TextField.Input autoFocus {...register('name')} />
                <TextField.ErrorMessage
                    message={formState.errors.name?.message}
                />
            </TextField.Root>

            <TextField.Root>
                <TextField.Label label="CNPJ" isRequired />
                <TextField.Input {...register('cnpj')} />
                <TextField.ErrorMessage
                    message={formState.errors.cnpj?.message}
                />
            </TextField.Root>

            <NavigationFooter>
                <PrimaryButton type="submit" disabled={!formState.isValid}>
                    Salvar
                </PrimaryButton>
            </NavigationFooter>
        </form>
    );
};

export { Form };
