import User from '../models/user-model.js';

/**
 * UserController class.
 * Handles requests made to the /api/v1/users endpoint
 */
class UserController {

  /**
   * getAllUsers
   *
   * Gets all registered users.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object[]} Users
   */
  getAllUsers(req, res, next) {
    res.send({ content: 'get all users' });
  }

  /**
   * getOneUser
   *
   * Gets a specified user.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User
   */
  getOneUser(req, res, next) {
    res.send({ content: 'get single user' });
  }

  /**
   * editUser
   *
   * Edits a users data.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Users
   */
  editUser(req, res, next) {
    res.send({ content: 'edit single user' });
  }

  /**
   * deleteUser
   *
   * Deletes a users data.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Users
   */
  deleteUser(req, res, next) {
    res.send({ content: 'deletes a user' });
  }

  /**
   * getUserDocuments
   *
   * Get all documents belonging to a user.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object[]} Document
   */
  getUserDocuments(req, res, next) {
    res.send({ content: 'get a user\'s documents' });
  }

  /**
   * getUserDocument
   *
   * Get a specified document belonging to a user.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Document
   */
  getUserDocument(req, res, next) {
    res.send({ content: 'get a specified document from a specified user' });
  }

  /**
   * createDocument
   *
   * Save a customized document.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Document
   */
  createDocument(req, res, next) {
    res.send({ content: 'add a document' });
  }

  /**
   * editUserDocument
   *
   * Edits a users document.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Document
   */
  editUserDocument(req, res, next) {
    res.send({ content: 'edit a specified document' });
  }

  /**
   * deleteUserDocument
   *
   * Deletes a users document.
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} Users
   */
  deleteUserDocument(req, res, next) {
    res.send({ content: 'delete a specified document' });
  }
}

export default new UserController();
