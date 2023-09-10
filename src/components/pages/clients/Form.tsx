'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { cnpj } from 'cpf-cnpj-validator';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FormField } from '@/components/shared/FormField';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { useSearchParams } from 'next/navigation';

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

    const { handleSubmit, register, formState } = useForm({
        resolver: yupResolver(clientSchema),
        mode: 'onTouched',
        defaultValues: {
            name: params.get('name') || '',
            cnpj: params.get('cnpj') || '',
        },
    });

    const onSubmit = useCallback(async (values: FormValues) => {
        console.log(values);
    }, []);

    return (
        <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormField
                required
                autoFocus
                label="Razão social"
                {...register('name')}
                errorMessage={formState.errors.name?.message}
            />
            <FormField
                required
                label="CNPJ"
                maskOptions={{
                    mask: '00.000.000/0000-00',
                }}
                {...register('cnpj')}
                errorMessage={formState.errors.cnpj?.message}
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
