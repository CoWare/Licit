import DocumentTemplate from '../models/templates-model.js';

/**
 * DocumentTemplateControl
 *
 * Handles requests made to /api/v1/templates
*/
class DocumentTemplateControl {

  /**
   * getTemplates
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object[]} Templates
  */
  getTemplates(req, res, next) {
    res.send({ content: 'get all templates' });
  }

  /**
   * getTemplate
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Template
  */
  getTemplate(req, res, next) {
    res.send({ content: 'get a particulatr template' });
  }

  /**
   * addTemplates
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Template
  */
  addTemplates(req, res, next) {
    res.send({ content: 'add a template' });
  }

  /**
   * editTemplates
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Template
  */
  editTemplates(req, res, next) {
    res.send({ content: 'edit a template' });
  }

  /**
   * deleteTemplates
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Template
  */
  deleteTemplates(req, res, next) {
    res.send({ content: 'delete a template' });
  }
}

export default new DocumentTemplateControl();
