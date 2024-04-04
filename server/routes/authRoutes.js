
const router = require('express').Router();

const {login, registerUser, logout} = require('../controllers/authController');

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/logout').post(logout);


module.exports = router;