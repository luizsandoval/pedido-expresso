import { randomUUID } from 'crypto';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { resolve } from 'path';

const handleFileUpload = async (file: File) => {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const extension = file.name.split('.').at(-1);
    const fileName = `${randomUUID()}.${extension}`;

    const imagesFolder = resolve(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        '..',
        '/public/uploads',
    );

    if (!existsSync(imagesFolder)) await mkdir(imagesFolder);

    const path = resolve(
        __dirname,
        imagesFolder,
        `${fileName}.${extension}`,
    );

    await writeFile(path, buffer);

    return path;
};

export { handleFileUpload };