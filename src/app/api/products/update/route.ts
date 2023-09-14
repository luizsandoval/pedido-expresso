import { withPUT, handleFileUpload } from '../../_lib';

export async function PUT(request: Request) {
    const data = await request.formData();
    const file: File | null = data.get('photo') as unknown as File;

    const payload = {
        _id: data.get('_id'),
        name: data.get('name'),
        price: data.get('price'),
        photoURL: data.get('photoURL'),
    };

    if (file) payload.photoURL = await handleFileUpload(file);

    return withPUT(request, 'products', payload);
}
