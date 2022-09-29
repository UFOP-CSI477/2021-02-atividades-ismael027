import cors from 'cors';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';
import routes from './http/routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ message: err.message, status: err.statusCode });
  }

  console.log(err);

  return response
    .status(500)
    .json({ message: 'Internal server error', status: 500 });
});

export { app };
