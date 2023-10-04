import { NextResponse } from 'next/server';
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from 'firebase/storage';
    
import { firebaseApp } from '@/config/firebase';
import { ApiResponse } from '@/models/api/api-response';

type UploadedFile = File & {
    path: string;
};

const storage = getStorage(firebaseApp);

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get('photo') as UploadedFile;
    const publicId = formData.get('publicId') as string;

    if (!file) throw 'Missing photo for upload';

    if (publicId) await deleteObject(ref(storage, publicId));

    const storageRef = ref(
        storage,
        `uploads/${Date.now().toString()}_${file.name}`,
    );

    const bytes = await file.arrayBuffer();

    await uploadBytes(storageRef, bytes, {
        customMetadata: {
            name: file.name,
        },
    });

    const url = await getDownloadURL(storageRef);

    return (NextResponse<ApiResponse<string>>).json({
        data: {
            url,
            publicId: storageRef.fullPath,
        },
        success: true,
    });
}
