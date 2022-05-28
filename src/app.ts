import express from 'express';
import routes from './routes/index';
import path from 'path';

const app = express();
const port = 3000;

app.use('/api', routes);
app.use('/public', express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(
    `Example API http://localhost:3000/api/images?filename=encenadaport&height=700&width=400`
  );
});
export default app;
