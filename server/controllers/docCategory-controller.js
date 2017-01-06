import DocumentCategory from '../models/category-model.js';

/**
 * DocumentCategoryControl
 *
 * handles requests made to /api/v1/categories
*/
class DocumentCategoryControl {

  /**
   * getCategories
   *
   * Gets all category names
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object[]} Categories
   */
  getCategories(req, res, next) {
    res.send({ content: 'get all doc categories' });
  }

  /**
   * getCategory
   *
   * Gets a category name
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Category
   */
  getCategory(req, res, next) {
    res.send({ content: 'get the name of the category' });
  }

  /**
   * getCategoryDocuments
   *
   * Gets a category name
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Category
   */
  getCategoryDocuments(req, res, next) {
    res.send({ content: 'get docs from a specified category' });
  }

  /**
   * addCategory
   *
   * Adds a new category names
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Categories
   */
  addCategory(req, res, next) {
    res.send({ content: 'add a new category' });
  }

  /**
   * editCategory
   *
   * Edits a category data
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Category
   */
  editCategory(req, res, next) {
    res.send({ content: 'edit a category' });
  }

  /**
   * deleteCategory
   *
   * Delete a category data
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Category
   */
  deleteCategory(req, res, next) {
    res.send({ content: 'delete a category' });
  }
}

export default new DocumentCategoryControl();
