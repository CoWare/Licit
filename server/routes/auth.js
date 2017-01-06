import express from 'express';
import AuthController from '../controllers/auth-controller.js';

const auth = express.Router();

auth.post('/signup', (req, res, next) => {
  AuthController.signup(req, res, next);
});

auth.post('/signin', (req, res, next) => {
  AuthController.signin(req, res, next);
});

auth.post('/signout', (req, res, next) => {
  AuthController.signout(req, res, next);
});

export default auth;
