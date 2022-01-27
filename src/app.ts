import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

import ApiError from '@utils/ApiError';
import ErrorSerializer from '@serializers/Error';
import { stream } from '@utils/logger';
import MongoDB from '@services/mongodb';

const app = express();

MongoDB.connect();

app.use(morgan('tiny', { stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req: Request, res: Response, next: NextFunction) => {
  const code = 404;

  res.status(code).json(new ErrorSerializer(code, 'Not found'));
});

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const {
    code = 500,
    message = 'Something went wrong',
  } = err;

  res.status(code).json(new ErrorSerializer(code, message));
});

export default app;
