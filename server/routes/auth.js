import express from 'express';

const auth = express.Router();

auth.post('/signup', (req, res, next) => {
  res.send('signup');
});

auth.post('/signin', (req, res, next) => {
  res.send('signin');
});

auth.post('/signout', (req, res, next) => {
  res.send('signout');
});

export default auth;
