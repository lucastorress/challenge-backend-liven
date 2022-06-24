import { Router } from 'express';
import UserController from './controller/userController';

const controller = new UserController();

export default function UserRouter(routes: Router): void {
  routes.post('/user', controller.store.bind(controller));

  console.log('[router] UserRouter is already to use...');
}
