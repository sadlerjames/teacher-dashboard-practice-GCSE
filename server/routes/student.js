const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');

router.post('/create', studentController.create);
router.post('/allstudents', studentController.allStudents);


module.exports = router;