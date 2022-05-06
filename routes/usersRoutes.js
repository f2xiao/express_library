const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')

/* GET users listing. */
router.post('/',userController.getUser);

module.exports = router;
