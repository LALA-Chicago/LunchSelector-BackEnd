const router = require('express').Router();
const {
  getUser,
  addProfile,
  login, 
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(addProfile)
router.route('/login').post(login);

module.exports = router;