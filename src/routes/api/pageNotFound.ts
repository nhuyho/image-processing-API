import { Request, Response } from 'express';

const pageNotFound404 = (req: Request, res: Response) => {
  res.status(404);
  res.render('pageNotFound');
};
export default pageNotFound404;
