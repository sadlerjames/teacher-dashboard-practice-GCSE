const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');

router.post('/create', studentController.create);
router.post('/allstudents', studentController.allStudents);
router.post('/alldata', studentController.allData);
router.post('/personalupdate', studentController.personalUpdate);
router.post('/schoolupdate', studentController.schoolUpdate);


module.exports = router;