'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ClientCard } from '@/components/pages/clients/ClientCard';
import { ClientsList } from '@/components/pages/clients/ClientsList';
import { Card } from '@/components/shared/Card';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SearchInput } from '@/components/shared/SearchInput';
import { Title } from '@/components/shared/Title';
import { Client } from '@/models/client';

import { StepProps } from './step-props';
import { Radio } from '@/components/shared/Radio';

const firstStepSchema = yup.object().shape({
    client: yup
        .object()
        .shape({
            _id: yup.string().required(),
            name: yup.string().required(),
            cnpj: yup.string().required(),
        })
        .required(),
});

const FirstStep = ({ onValidStateChange }: StepProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const searchValue = searchParams.get('searchValue') || '';
    const client = searchParams.get('client') || '{}';

    const { register, handleSubmit, formState, setValue, watch } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(firstStepSchema),
        defaultValues: {
            client: JSON.parse(client),
        },
    });

    const clientId = watch('client._id');

    const isSelected = useCallback(
        (client: Client) => client._id === clientId,
        [clientId],
    );

    const onSubmit = useCallback(
        ({ client }: { client: Required<Client> }) => {
            const params = new URLSearchParams(searchParams);

            params.set('client', JSON.stringify(client));

            router.push(`${pathname}?${params.toString()}`);
            router.push(`/orders/form/2?${params.toString()}`);
        },
        [searchParams, router, pathname],
    );

    useEffect(() => {
        register('client');
    }, [register]);

    useEffect(() => {
        onValidStateChange(formState.isValid);
    }, [formState.isValid, onValidStateChange]);

    return (
        <>
            <Title>SELECIONE O CLIENTE</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card>
                    <SearchInput
                        autoFocus
                        placeholder="Digite para filtrar..."
                        defaultValue={searchValue}
                    />
                    <ClientsList
                        searchValue={searchValue}
                        renderCard={(props) => (
                            <ClientCard.Root
                                {...props}
                                onClick={() =>
                                    setValue(
                                        'client',
                                        isSelected(props?.client)
                                            ? ({} as Required<Client>)
                                            : props.client,
                                        {
                                            shouldValidate: true,
                                        },
                                    )
                                }
                            >
                                <Radio
                                    value={props?.client?._id}
                                    isChecked={isSelected(props.client)}
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

export { FirstStep };
