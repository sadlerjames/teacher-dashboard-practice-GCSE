const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize').sequelize;

const Model = Sequelize.Model;
class User extends Model { }
User.init({
    // attributes
    email: {
        type: Sequelize.STRING,
        allowNull: false

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false

    }
}, {
        sequelize,
        modelName: 'user'
        // options
    });


module.exports = {
    create: function (inemail, inpassword, callback) {
        try {
            User.create({ email: inemail, password: inpassword }).then(success => {
                callback(success);
            });

        } catch (err) {
            // pass any errors on
            callback(err);
        }
    }, 
    /**

   * Returns the user's email, password, createdAt and updatedAt values from the database

   *

   * @param {Request} req http request object, i.e. request from user

   * @param {Response} res http response object, i.e. response to send to user

   * @param {Function} callback function to call afterwards

   */
    allinfo: function (inemail, callback) {
        try {
            User.findAll({where: {email: inemail}}).then(function(result){
                callback(result[0]);
            });
        } catch (err) {
            // pass any errors on
            callback(err);
        }
    }

};