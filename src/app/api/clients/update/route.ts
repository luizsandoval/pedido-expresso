import { NextResponse } from 'next/server';

import { updateOne } from '../../_lib';

export async function PUT(request: Request) {
    try {
        const { _id, name, cnpj } = await request.json();

        const client = {
            _id,
            name,
            cnpj,
        };

        await updateOne(_id, client, 'clients');

        return NextResponse.json({
            success: true,
            data: client,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.error();
    }
}
