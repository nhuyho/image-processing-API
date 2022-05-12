import express from 'express';
import { resize } from './handlers/resize';

export const app = express();
const port = 3000;

app.get('/api/images', (req, res) => {
  try {
    const widthString: any = req.query.width;
    const heightString: any = req.query.height;
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
