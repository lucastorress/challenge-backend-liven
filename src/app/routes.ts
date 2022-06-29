import { Router } from 'express';

import {
  getUserController,
  createUserController,
  updateUserController,
  deleteUserController,
} from './user';

import { authenticateUserController } from './auth';

const router = Router();

// Auth
router.post('/auth/login', (request, response) => {
  return authenticateUserController.handle(request, response);
});

// Users
router.get('/users/:id', (request, response) => {
  return getUserController.handle(request, response);
});
router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});
router.put('/users/:id', (request, response) => {
  return updateUserController.handle(request, response);
});
router.delete('/users/:id', (request, response) => {
  return deleteUserController.handle(request, response);
});

export { router };
