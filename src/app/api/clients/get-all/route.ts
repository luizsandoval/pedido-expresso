import { NextResponse } from 'next/server';

import { find } from '../../_lib/find';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const searchValue = searchParams.get('searchValue');
        let filter = {};

        if (searchValue)
            filter = {
                $or: [
                    {
                        name: {
                            $regex: searchValue,
                            $options: 'i',
                        },
                    },
                    {
                        cnpj: {
                            $regex: searchValue,
                            $options: 'i',
                        },
                    },
                ],
            };

        const data = await find('clients', filter);

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
