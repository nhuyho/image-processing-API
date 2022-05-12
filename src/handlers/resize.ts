import fs from 'fs';
import sharp from 'sharp';

export const resize = (
  path: string,
  width: number | undefined,
  height: number | undefined
) => {
  const readStream = fs.createReadStream(path);
  let transform = sharp();

  if (width || height) {
    transform = transform.resize(width, height);
  }

  return readStream.pipe(transform);
};

export const createThumbnail = (
  file: string,
  width: string,
  height: string
): string => {
  const [filename, ext] = file.split('.');
  return `${filename}_${width}_${height}.${ext}`;
};
