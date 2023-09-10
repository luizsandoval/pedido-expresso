import { NextResponse } from 'next/server';

import { find } from '../../_lib/find';

export async function GET(request: Request) {
    try {
        const data = await find('clients');

        return NextResponse.json({
            success: true,
            data,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            data: error,
        });
    }
}
