import express from 'express';

const userRoute = express.Router();

userRoute.get('/:uid', (req, res, next) => {
  res.send('get single user');
});

userRoute.put('/:uid', (req, res, next) => {
  res.send('edit single user');
});

userRoute.get('/:uid/documents', (req, res, next) => {
  res.send('get a user\'s documents');
});

userRoute.get('/:uid/documents/:did', (req, res, next) => {
  res.send('get a specified document from a specified user');
});

userRoute.post('/:uid/documents', (req, res, next) => {
  res.send('add a document');
});

userRoute.put('/:uid/documents/:did', (req, res, next) => {
  res.send('edit a specified document');
});

userRoute.delete('/:uid/documents/:did', (req, res, next) => {
  res.send('delete a specified document');
});

export default userRoute;
