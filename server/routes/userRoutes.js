
const router = require('express').Router();
const {getAllUser} = require('../controllers/userController');
const {protectRoute} = require("../middleware/protectRoutes");

router.route('/').get(protectRoute, getAllUser);

module.exports = router;