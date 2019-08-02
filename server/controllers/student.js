const createstudent = require('../utils/create.js').create;
const genId = require('../utils/randomGen.js').genId;

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

            //call the all info function, with the email variable in the parameter
            createstudent(forename, surname, dob, address, phone, gender, tutor, userid, function (r) {
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
    }
};