import { NextResponse } from 'next/server';

import { updateOne } from '../../_lib';

export async function withPUT(
    request: Request,
    resourceName: string,
    customBody?: Record<string, unknown>,
) {
    try {
        const payload = customBody ?? (await request.json());

        if (!('_id' in payload)) throw 'Missing _id in request body';

        await updateOne(payload._id, payload, resourceName);

        return NextResponse.json({
            success: true,
            data: payload,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.error();
    }
}
