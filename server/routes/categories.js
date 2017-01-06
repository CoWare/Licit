import express from 'express';

const docCategoryRoute = express.Router();

docCategoryRoute.get('/', (req, res, next) => {
  res.send({ content: 'get all doc categories' });
});

docCategoryRoute.get('/:cid', (req, res, next) => {
  res.send({ content: 'get docs from a particular category' });
});

export default docCategoryRoute;
