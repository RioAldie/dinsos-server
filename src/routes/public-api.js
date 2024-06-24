import express from 'express';
import userController from '../controller/user-controller.js';
import reportController from '../controller/report-controller.js';
import eventController from '../controller/event-controller.js';
import postController from '../controller/post-controller.js';

const publicRouter = new express.Router();

publicRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Dinsos Server' });
});
publicRouter.post('/api/auth', userController.register);
publicRouter.post('/api/auth/login', userController.login);
publicRouter.get('/api/users', userController.getAll);
// REPORTS
publicRouter.post('/api/report', reportController.add);
publicRouter.post('/api/report/edit', reportController.edit);
publicRouter.delete('/api/report/:id', reportController.remove);
publicRouter.get('/api/reports', reportController.getAll);
publicRouter.get('/api/report/:id', reportController.get);
// EVENT
publicRouter.post('/api/event', eventController.add);
publicRouter.put('/api/event/edit', eventController.edit);
publicRouter.delete('/api/event/:id', eventController.remove);
publicRouter.get('/api/events', eventController.getAll);
publicRouter.get('/api/event/:id', eventController.get);
//POST
publicRouter.post('/api/post', postController.add);
publicRouter.put('/api/post/edit', postController.edit);
publicRouter.delete('/api/post/:id', postController.remove);
publicRouter.get('/api/posts', postController.getAll);
publicRouter.get('/api/post/:id', postController.get);

export { publicRouter };
