

const router = require('express').Router();
const {sendMessage, getMessage} = require('../controllers/messageController');
const {protectRoute} = require("../middleware/protectRoutes");

router.route('/send/:id').post(protectRoute, sendMessage);
router.route('/get/:id').get(protectRoute, getMessage);


module.exports = router;