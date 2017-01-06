import express from 'express';
import DocumentTemplateControl from '../controllers/docTemplate-controller.js';

const docTemplateRoute = express.Router();

docTemplateRoute.get('/', (req, res, next) => {
  DocumentTemplateControl.getTemplates(req, res, next);
});

docTemplateRoute.get('/:tid', (req, res, next) => {
  DocumentTemplateControl.getTemplate(req, res, next);
});

docTemplateRoute.post('/', (req, res, next) => {
  DocumentTemplateControl.addTemplates(req, res, next);
});

docTemplateRoute.put('/:tid', (req, res, next) => {
  DocumentTemplateControl.editTemplates(req, res, next);
});

docTemplateRoute.delete('/:tid', (req, res, next) => {
  DocumentTemplateControl.deleteTemplates(req, res, next);
});

export default docTemplateRoute;
