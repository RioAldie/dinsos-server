import express from 'express';
import adminController from '../controller/admin-controller.js';

const publicRouter = new express.Router();
publicRouter.post('/api/admin', adminController.register);

export { publicRouter };
