import { withPOST, handleFileUpload } from '../../_lib';

export async function POST(request: Request) {
    const data = await request.formData();
    const file: File | null = data.get('photo') as unknown as File;

    const payload = {
        name: data.get('name'),
        price: data.get('price'),
        photoURL: '',
    };

    if (file) payload.photoURL = await handleFileUpload(file);

    return withPOST(request, 'products', payload);
}
