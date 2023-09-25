import { NextResponse } from 'next/server';

import { cloudinary } from '@/app/api/_lib/cloudinary';
import { ApiResponse } from '@/models/api/api-response';
import { unlink, writeFile } from 'fs/promises';

type UploadedFile = File & {
    path: string;
};

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('photo') as UploadedFile;
        const publicId = formData.get('publicId') as string;

        if (!file) throw 'Missing photo for upload';

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        await writeFile(file.name, buffer);

        if (publicId) await cloudinary.uploader.destroy(publicId);

        const { url, public_id } = await cloudinary.uploader.upload(file.name);

        await unlink(file.name);

        return (NextResponse<ApiResponse<string>>).json({
            data: {
                url,
                publicId: public_id,
            },
            success: true,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.error();
    }
}
