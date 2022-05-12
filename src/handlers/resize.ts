import fs from 'fs';
import sharp from 'sharp';

export const resize = (
  path: any,
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
