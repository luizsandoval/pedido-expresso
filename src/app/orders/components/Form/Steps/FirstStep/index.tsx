'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ClientCard } from '@/app/clients/components/ClientCard';
import { ClientsList } from '@/app/clients/components/ClientsList';
import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { Radio } from '@/components/shared/Radio';
import { Title } from '@/components/shared/Title';
import { Client } from '@/models/client';

import { StepProps } from '../models';
import { firstStepSchema } from './validationSchema';

const FirstStep = ({ onValidStateChange }: StepProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
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

    const onSubmit = useCallback(() => {
        const params = new URLSearchParams(searchParams);

        router.push(`/orders/form/2?${params.toString()}`);
    }, [searchParams, router]);

    const handleSelection = useCallback(
        (client: Required<Client>) => {
            setValue(
                'client',
                isSelected(client) ? ({} as Required<Client>) : client,
                {
                    shouldValidate: true,
                },
            );

            const params = new URLSearchParams(searchParams);

            params.set('client', JSON.stringify(client));

            router.push(`${pathname}?${params.toString()}`);
        },
        [isSelected, pathname, router, searchParams, setValue],
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
                <ClientsList
                    renderItem={({ document, key }) => (
                        <ClientCard.Root
                            key={key}
                            client={document}
                            onClick={() => handleSelection(document)}
                        >
                            <Radio
                                value={document?._id}
                                isChecked={isSelected(document)}
                            />
                        </ClientCard.Root>
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

export { FirstStep };
