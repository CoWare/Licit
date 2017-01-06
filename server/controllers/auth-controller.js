import User from '../models/user-model.js';

/**
 * AuthController
 *
 * Handles requests made to /api/v1/auth
 */
class AuthController {

  /**
   * signup
   *
   * Registers a new user
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User
   */
  signup(req, res, next) {
    res.send({ content: 'signup' });
  }

  /**
   * signin
   *
   * Logs in a registered user
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {Object} User
   */
  signin(req, res, next) {
    res.send({ content: 'signin' });
  }

  /**
   * signout
   *
   * Logs out a logged in user
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @returns {String} Success or Failure
   */
  signout(req, res, next) {
    res.send({ content: 'signout' });
  }
}

export default new AuthController();
