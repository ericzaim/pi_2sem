import { authUser } from '../controllers/auth.controller';
import express from 'express';

const routes = express.Router();

routes.post('/login',authUser);

export default routes;