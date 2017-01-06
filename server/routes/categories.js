import express from 'express';
import DocumentCategoryControl from '../controllers/docCategory-controller.js';

const docCategoryRoute = express.Router();

docCategoryRoute.get('/', (req, res, next) => {
  DocumentCategoryControl.getCategories(req, res, next);
});

docCategoryRoute.get('/:cid', (req, res, next) => {
  DocumentCategoryControl.getCategory(req, res, next);
});

docCategoryRoute.get('/:cid/documents', (req, res, next) => {
  DocumentCategoryControl.getCategoryDocuments(req, res, next);
});

docCategoryRoute.post('/', (req, res, next) => {
  DocumentCategoryControl.addCategory(req, res, next);
});

docCategoryRoute.put('/:cid', (req, res, next) => {
  DocumentCategoryControl.editCategory(req, res, next);
});

docCategoryRoute.delete('/:cid', (req, res, next) => {
  DocumentCategoryControl.deleteCategory(req, res, next);
});

export default docCategoryRoute;
