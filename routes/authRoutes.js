const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')


/* GET users listing. */
router.post('/login',authController.verifyUser);
router.get('/logout',authController.logoutUser);

module.exports = router;
