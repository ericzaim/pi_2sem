import express from 'express';
import { createUsers, delUser, getUserBy, getUsers, patchUser } from '../controllers/user.controller';

const routes = express.Router();

routes.get('/users', getUsers);
routes.get('/user',getUserBy);
routes.post('/user', createUsers)
routes.patch('/user', patchUser);
routes.delete('/user/:id',delUser);

export default routes