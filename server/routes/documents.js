import express from 'express';

const docRoute = express.Router();

docRoute.get('/', (req, res, next) => {
  res.send({ content: 'get all documents' });
});

docRoute.get('/:did', (req, res, next) => {
  res.send({ content: 'get aparticulatr document' });
});

docRoute.post('', (req, res, next) => {
  res.send({ content: 'add a document' });
});

docRoute.put('/:did', (req, res, next) => {
  res.send({ content: 'edit a document' });
});

export default docRoute;
