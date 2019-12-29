import express from 'express';
import multer from 'multer';
import PostController from './controllers/PostController';
import LikeController from './controllers/LikeController';
import uploadConfig from './config/upload';

const upload = multer(uploadConfig);
const routes = express.Router();

// Post Routes
routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);
routes.get('/post/:id', PostController.show);
routes.put('/post/:id', PostController.update);
routes.delete('/post/:id', PostController.delete);

// Like Routes
routes.post('/post/:id/like', LikeController.like);
routes.post('/post/:id/deslike', LikeController.deslike);

export default routes;
