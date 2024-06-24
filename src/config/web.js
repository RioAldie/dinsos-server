import express from 'express';
import { database } from './database.js';
import { publicRouter } from '../routes/public-api.js';
import cors from 'cors';

export const web = express();

web.use(cors());

web.use(express.json());

database
  .then(() => {
    console.log('connect database successfully !');
  })
  .catch((error) => {
    console.log(error);
  });
web.use(publicRouter);
