import { updateOne } from '../../_lib';

export async function withPUT(request: Request, resourceName: string) {
    try {
        const payload = await request.json();

        if (!('_id' in payload)) throw 'Missing _id in request body';

        await updateOne(payload._id, payload, resourceName);

        return {
            success: true,
            data: payload,
        };
    } catch (error) {
        console.log(error);

        throw error;
    }
}
