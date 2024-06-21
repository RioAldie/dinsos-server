import express from 'express';
import { database } from './database.js';
import { publicRouter } from '../routes/public-api.js';
export const web = express();

web.use(express.json());

database
  .then(() => {
    console.log('connect database successfully !');
  })
  .catch((error) => {
    console.log(error);
  });
web.use(publicRouter);
