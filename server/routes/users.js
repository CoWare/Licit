import express from 'express';
import UserController from '../controllers/user-controller.js';

const userRoute = express.Router();

userRoute.get('/', (req, res, next) => {
  UserController.getAllUsers(req, res, next);
});

userRoute.get('/:uid', (req, res, next) => {
  UserController.getOneUser(req, res, next);
});

userRoute.put('/:uid', (req, res, next) => {
  UserController.editUser(req, res, next);
});

userRoute.delete('/:uid', (req, res, next) => {
  UserController.deleteUser(req, res, next);
});

userRoute.get('/:uid/documents', (req, res, next) => {
  UserController.getUserDocuments(req, res, next);
});

userRoute.get('/:uid/documents/:did', (req, res, next) => {
  UserController.getUserDocument(req, res, next);
});

userRoute.post('/:uid/documents', (req, res, next) => {
  UserController.createDocument(req, res, next);
});

userRoute.put('/:uid/documents/:did', (req, res, next) => {
  UserController.editUserDocument(req, res, next);
});

userRoute.delete('/:uid/documents/:did', (req, res, next) => {
  UserController.deleteUserDocument(req, res, next);
});

export default userRoute;
