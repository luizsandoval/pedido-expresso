import { insertOne } from '../../_lib';

export async function withPOST(request: Request, resourceName: string) {
    try {
        const payload = await request.json();

        const insertedId = await insertOne(payload, resourceName);

        const data = {
            _id: insertedId,
            ...payload,
        };

        return {
            success: true,
            data,
        };
    } catch (error) {
        console.log(error);

        throw error;
    }
}
