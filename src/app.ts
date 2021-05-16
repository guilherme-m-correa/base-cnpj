import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import AppError from './errors/AppError';
import createConnection from './database';
import routes from './routes';
import sentryConfig from './config/sentry';
import './container';

createConnection();

const app = express();

Sentry.init(sentryConfig);

app.use(Sentry.Handlers.requestHandler());
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(Sentry.Handlers.errorHandler());
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  Sentry.captureException(err);

  return response.status(500).json({
    err: err.message,
  });
});

export default app;
