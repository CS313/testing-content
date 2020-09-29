import express from 'express';
import { showPost } from './controllers/post';

const routes = express.Router();

routes.get('/:slug', (req, res) => showPost({ req, res }));

export default routes;
