import express, { Application } from 'express';
import { resize } from './handlers/resize';

export const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/api/images', (req: express.Request, res: express.Response) => {
  try {
    const widthString: string = req.query.width as string;
    const heightString: string = req.query.height as string;
    const filename = req.query.file;
    let width, height;
    if (widthString) {
      width = parseInt(widthString);
    }
    if (heightString) {
      height = parseInt(heightString);
    }
    const filePath = `./src/images/${filename}`;
    resize(filePath, width, height).pipe(res);
    res.set({
      'Cache-Control': 'public, max-age=86400',
      Expires: new Date(Date.now() + 86400000).toUTCString(),
    });
  } catch {
    console.log('Error');
  }
});

app.listen(port, () => {
  console.log(`Express server listening on port http://localhost:${port}`);
  console.log(
    `Example API http://localhost:${port}/api/images?file=santamonica.jpg&width=400&height=700`
  );
});
