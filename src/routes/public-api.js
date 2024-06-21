import express from 'express';
import userController from '../controller/user-controller.js';

const publicRouter = new express.Router();
publicRouter.post('/api/auth', userController.register);
publicRouter.post('/api/auth/login', userController.login);
publicRouter.get('/api/users', userController.getAll);

export { publicRouter };
