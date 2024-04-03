
const router = require('express').Router();

const user = require('../controllers/userController');

router.route('/register').post(user.registerUser);
router.route('/login').post(user.login);

module.exports = router;