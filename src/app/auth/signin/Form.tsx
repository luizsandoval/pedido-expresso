'use client';

import { BuiltInProviderType } from 'next-auth/providers/index';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';

import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { Logo } from '@/components/core/Logo';

type FormProps = {
    providers: Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    >;
    callbackUrl?: string;
};

const Form = ({ callbackUrl = '/', providers }: FormProps) => (
    <div className="flex min-h-screen w-full items-center justify-center">
        {Object.values(providers).map((provider) => (
            <div
                className="flex flex-col items-center justify-center gap-4 rounded-md border-2 border-gray-300 p-8"
                key={provider.name}
            >
                <Logo size={60} />
                <h1 className="text-center text-xl">
                    Bem vindo ao Pedido Expresso <br />{' '}
                    <span className="text-sm">
                        Autentique-se para continuar
                    </span>
                </h1>
                <PrimaryButton
                    onClick={() => signIn(provider.id, { callbackUrl })}
                >
                    Entrar com {provider.name}
                </PrimaryButton>
            </div>
        ))}
    </div>
);

export { Form };
