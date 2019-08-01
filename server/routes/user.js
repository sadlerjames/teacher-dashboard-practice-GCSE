const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/login', userController.login);
router.post('/create', userController.create);
router.post('/logout', userController.logout);
router.post('/authdata', userController.getauthdata);

module.exports = router;