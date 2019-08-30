const createstudent = require('../utils/create.js').create;
const genId = require('../utils/randomGen.js').genId;
const allStudents = require('../utils/find.js').allStudents;
const allStudentData = require('../utils/find.js').allData;
const personalUpdate = require('../utils/update.js').personalUpdate;

require('dotenv').config();

module.exports = {
    create: function (req, res) {
        try {
            //get all the students info from the request and store in variables
            let forename = req.body.forename;
            let surname = req.body.surname;
            let dob = req.body.dob;
            let address = req.body.address;
            let phone = req.body.phone;
            let gender = req.body.gender;
            let tutor = req.body.tutor;
            let userid = genId();
            let studentemail = surname + forename.charAt(0) + '@treeroad.com';
            let email = studentemail.toLowerCase();

            //call the all info function, with the email variable in the parameter
            createstudent(forename, surname, dob, address, phone, gender, tutor, userid, email, function (r) {
                //r is the result of the callback
                if (r === undefined || r.length == 0) {
                    // array empty or does not exist
                    res.json({
                        success: false
                    });
                } else {
                    res.json({
                        success: true
                    });
                }
            });
        } catch (err) {
            // pass any errors on
            console.log(err);
            res.json({
                success: false
            });
        }
    },
    allStudents: function (req, res) {
        try {
            allStudents(function (r) {
                //r is the result of the callback
                if (r === undefined || r.length == 0) {
                    // array empty or does not exist
                    res.json({
                        success: false
                    });
                } else {
                    res.json({
                        success: true,
                        data: { students: r }
                    });
                }
            });
        } catch (err) {
            // pass any errors on
            console.log(err);
            res.json({
                success: false
            });
        }
    },
    allData: function (req, res) {
        try {
            let studentid = req.body.id;
            allStudentData(studentid, function (r) {
                //r is the result of the callback
                if (r === undefined || r.length == 0) {
                    // array empty or does not exist
                    res.json({
                        success: false
                    });
                } else {
                    res.json({
                        success: true,
                        data: { data: r }
                    });
                }
            });
        } catch (err) {
            // pass any errors on
            console.log(err);
            res.json({
                success: false
            });
        }
    },
    personalUpdate: function (req, res) {
        try {
            let id = req.body.id;
            let forename = req.body.forename;
            let surname = req.body.surname;
            let dob = req.body.dob;
            let gender = req.body.gender;
            personalUpdate(id, forename, surname, dob, gender, function (r) {
                //r is the result of the callback
                if (r === undefined || r.length == 0) {
                    // array empty or does not exist
                    res.json({
                        success: false
                    });
                } else {
                    res.json({
                        success: true,
                        data: { data: r }
                    });
                }
            });
        } catch (err) {
            // pass any errors on
            console.log(err);
            res.json({
                success: false
            });
        }
    }
};