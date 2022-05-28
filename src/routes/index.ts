import express from 'express';
// import images from './api/images';
import { promises as fsPromises } from 'fs';

import fs from 'fs';
import path from 'path';
import { resizeImage, resizeImagePath } from '../utils/imageTransforms';

const routes = express.Router();

routes.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const filename = req.query.filename as unknown as string;
    const height = parseInt(req.query.height as unknown as string);
    const width = parseInt(req.query.width as unknown as string);
    const outputPath: string = resizeImagePath(filename, height, width);

    if (!fs.existsSync(outputPath)) {
      const resizedImage = await resizeImage(filename, height, width);
      await fsPromises.writeFile(outputPath, resizedImage);
    }

    res.sendFile(path.resolve(outputPath));
  } catch (err: any) {
    res.render('errors', { message: err.message });
  }
});
routes.use('/images', routes);

export default routes;
