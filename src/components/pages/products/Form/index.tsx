'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiCamera } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { NavigationFooter } from '@/components/shared/NavigationFooter';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { TextField } from '@/components/shared/TextField';
import { Product } from '@/models/product';
import {
    UploadProgressInfo,
    create,
    update,
    uploadPhoto,
} from '@/services/products';
import { ResourceWithoutBasicAttributes } from '@/models/base';

import { productSchema } from './validationSchema';

const Form = () => {
    const params = useSearchParams();
    const router = useRouter();
    const [uploadProgress, setUploadProgress] =
        useState<UploadProgressInfo | null>(null);

    const { handleSubmit, register, formState, watch, setValue } =
        useForm({
            resolver: yupResolver(productSchema),
            mode: 'onTouched',
            defaultValues: {
                name: params.get('name') || '',
                photo: {
                    url: params.get('photo.url') || '',
                    publicId: params.get('photo.publicId') || '',
                },
                price: Number(params.get('price')) ?? 0,
            },
        });

    const photoUrl = watch('photo.url');

    const onSubmit = useCallback(
        async (values: ResourceWithoutBasicAttributes<Product>) => {
            const _id = params.get('_id');

            try {
                const payload = {
                    ...values,
                    photo: {
                        url: values.photo?.url || '',
                        publicId: values.photo?.publicId || '',
                    },
                };

                !_id ? await create(payload) : await update(_id, payload);

                router.push('/products');

                toast(`Produto ${!_id ? 'criado' : 'atualizado'} com sucesso`, {
                    type: 'success',
                });
            } catch (error) {
                console.log(error);
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

    const handleFileChange = useCallback(
        async (e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.item(0);

            if (file) {
                setValue('photo.url', URL.createObjectURL(file), {
                    shouldDirty: true,
                    shouldValidate: true,
                });

                const publicId = params.get('photo.publicId');
                const photo = await uploadPhoto(
                    file,
                    publicId,
                    setUploadProgress,
                );

                setUploadProgress(null);

                setValue('photo', photo, {
                    shouldValidate: true,
                    shouldDirty: true,
                });
            }
        },
        [params, setValue],
    );

    return (
        <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField.Root>
                <TextField.Label label="Nome" isRequired />
                <TextField.Input autoFocus {...register('name')} />
                <TextField.ErrorMessage
                    message={formState.errors.name?.message}
                />
            </TextField.Root>

            <TextField.Root>
                <TextField.Label label="Preço" isRequired />
                <TextField.Input
                    type="number"
                    {...register('price')}
                />
                <TextField.ErrorMessage
                    message={formState.errors.price?.message}
                />
            </TextField.Root>

            <label className="flex w-full flex-col gap-2">
                <span className="font-bold">Foto</span>
                <input type="file" hidden onChange={handleFileChange} />
                <div className="flex w-full flex-col content-center items-center gap-2 rounded-lg border-2 border-dashed border-gray-100 p-4 transition-all hover:cursor-pointer hover:border-2 hover:bg-indigo-50 hover:!text-white">
                    {uploadProgress && (
                        <p className="text-xs font-normal text-gray-400">
                            {uploadProgress.current}MB de {uploadProgress.total}
                            MB | {uploadProgress.progress}%
                        </p>
                    )}
                    {photoUrl ? (
                        <Image src={photoUrl} width={60} height={60} alt="" />
                    ) : (
                        <>
                            <FiCamera className="text-violet-200" size={56} />
                            <p className="text-xs font-normal text-gray-400">
                                Clique aqui para escolher uma foto
                            </p>
                        </>
                    )}
                </div>
            </label>
            <NavigationFooter>
                <PrimaryButton type="submit" disabled={!formState.isValid}>
                    Salvar
                </PrimaryButton>
            </NavigationFooter>
        </form>
    );
};

export { Form };
