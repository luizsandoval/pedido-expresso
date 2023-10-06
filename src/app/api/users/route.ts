import { NextResponse } from 'next/server';

import { GetResponse } from '@/models/api/get';
import { User } from '@/models/user';

import { Collection, withGET } from '../_lib';

export async function GET(request: Request) {
    return (NextResponse<GetResponse<User[]>>).json(
        await withGET<User>(request.url, Collection.Users, ['email', 'name']),
    );
}
