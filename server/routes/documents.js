import express from 'express';

const docRoute = express.Router();

docRoute.get('/documents', (req, res, next) => {
  res.send('get all documents');
});

docRoute.get('/documents/:did', (req, res, next) => {
  res.send('get aparticulatr document');
});

docRoute.post('/documents', (req, res, next) => {
  res.send('add a document');
});

docRoute.put('/documents/:did', (req, res, next) => {
  res.send('edit a document');
});

docRoute.get('/categories', (req, res, next) => {
  res.send('get all doc categories');
});

docRoute.get('/categories/:cid', (req, res, next) => {
  res.send('get docs from a particular category');
});

export default docRoute;
