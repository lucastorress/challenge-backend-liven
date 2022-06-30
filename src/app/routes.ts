import { Router } from 'express';

import { authenticateUserController, authMiddleware } from './auth';

import {
  getUserController,
  createUserController,
  updateUserController,
  deleteUserController,
} from './user';

import {
  getUserAddressByCountryController,
  getUserAddressByIdController,
  createAddressController,
} from './address';

const router = Router();

// Auth
router.post('/auth/login', (request, response) => {
  return authenticateUserController.handle(request, response);
});

// Users
router.get('/user/:id', authMiddleware, (request, response) => {
  return getUserController.handle(request, response);
});
router.post('/user', (request, response) => {
  return createUserController.handle(request, response);
});
router.put('/user/:id', (request, response) => {
  return updateUserController.handle(request, response);
});
router.delete('/user/:id', (request, response) => {
  return deleteUserController.handle(request, response);
});

// Address
router.get('/user/address', authMiddleware, (request, response) => {
  return getUserAddressByCountryController.handle(request, response);
});
router.get('/user/address/:id', authMiddleware, (request, response) => {
  return getUserAddressByIdController.handle(request, response);
});
router.post('/user/address', authMiddleware, (request, response) => {
  return createAddressController.handle(request, response);
});
router.put('/user/address/:id', authMiddleware, (request, response) => {
  return updateUserController.handle(request, response);
});
router.delete('/user/address/:id', authMiddleware, (request, response) => {
  return deleteUserController.handle(request, response);
});

export { router };
