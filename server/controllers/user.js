const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usermodel = require('../models/user');
const allinfo = require('../models/user').allinfo;
const verifyToken = require('../middleware/verifyToken').verifyToken;

require('dotenv').config();

//set the required settings for encrypting the passwords
let saltRounds = 10;
let salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
    login: function (req, res) {
        try {
            //get the email that is submitted from the front end and store it in a variable
            let email = req.body.email;
            //get the password that is submitted from the front end and store it in a variable
            let password = req.body.password;
            //call the all info function, with the email variable in the parameter
            allinfo(email, function (r) {
                //r is the result of the callback
                if (r === undefined || r.length == 0) {
                    // array empty or does not exist
                    res.json({
                        success: false
                    });
                } else {
                    //get the password stored in the database that matches the email entered
                    let dbpassword = r.password;
                    //compare the inputed password to the hashed password in the database
                    let compare = bcrypt.compareSync(password, dbpassword);
                    if (compare === true) {
                        //create a json web token
                        jwt.sign({ r }, process.env.SECRET_KEY, (err, token) => {
                            //send the success (true) back to the front end along with the jwt token
                            res.json({
                                success: true,
                                data: { token: token }
                            });
                        });
                    } else {
                        //send error response to front end
                        res.json({
                            success: false,
                            data: null
                        });
                    }

                }
            });
        } catch (err) {
            // pass any errors on
            console.log(err);
        }
    },

    create: function (req, res) {
        try {
            console.log("creating");
            let email = req.body.email;
            let password = req.body.password;
            let hashpass = bcrypt.hashSync(password, salt);
            usermodel.create(email, hashpass, function (r) {
                //r is the result of the callback
                if (r === undefined || r.length == 0) {
                    // array empty or does not exist
                    res.json({
                        success: false
                    });
                } else {
                    //create a json web token
                    jwt.sign({ r }, process.env.SECRET_KEY, (err, token) => {
                        //send the success (true) back to the front end along with the jwt token
                        res.json({
                            success: true,
                            data: { token: token }
                        });
                    });

                }
            });
        } catch (err) {
            // pass any errors on
            console.log(err);
        }

    },
    logout: function (req, res) {
        
    },
    getauthdata: function (req, res) {
        jwt.verify(req.body.cookie, process.env.SECRET_KEY, (err, authData) => {
            res.json({
                success: true,
                data: { auth: authData }
            });
          });
    }
    
};