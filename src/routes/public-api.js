import express from 'express';
import userController from '../controller/user-controller.js';
import reportController from '../controller/report-controller.js';

const publicRouter = new express.Router();
publicRouter.post('/api/auth', userController.register);
publicRouter.post('/api/auth/login', userController.login);
publicRouter.get('/api/users', userController.getAll);
publicRouter.post('/api/post', reportController.add);
publicRouter.post('/api/post/edit', reportController.edit);
publicRouter.delete('/api/post/:id', reportController.remove);
publicRouter.get('/api/posts', reportController.getAll);
publicRouter.get('/api/post/:id', reportController.get);

export { publicRouter };
