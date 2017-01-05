import express from 'express';

const auth = express.Router();

auth.post('/signup', (req, res, next) => {
  res.send({ content: 'signup' });
});

auth.post('/signin', (req, res, next) => {
  res.send({ content: 'signin' });
});

auth.post('/signout', (req, res, next) => {
  res.send({ content: 'signout' });
});

export default auth;
