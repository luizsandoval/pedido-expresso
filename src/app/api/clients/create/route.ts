import { NextResponse } from 'next/server';

import { insertOne } from '../../_lib/insertOne';

export async function POST(request: Request) {
    try {
        const { name, cnpj } = await request.json();

        const client = {
            name,
            cnpj,
        };

        const insertedId = await insertOne(client, 'clients');

        return NextResponse.json({
            success: true,
            data: {
                _id: insertedId,
                ...client,
            },
        });
    } catch (error) {
        console.log(error);

        return NextResponse.error();
    }
}
