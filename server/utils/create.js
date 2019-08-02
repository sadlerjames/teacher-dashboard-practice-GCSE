var fs = require('fs');
var _ = require("underscore");

module.exports = {
  create: function (forename, surname, dob, address, phone, gender, tutor, userid, callback) {    
    let studentdetails = {
      forename: forename,
      surname: surname,
      dob: dob,
      homeAddress: address,
      homePhone: phone,
      gender: gender,
      tutorGroup: tutor,
      id: userid
    };

    let existdata = fs.readFileSync('data.json');
    let json = JSON.parse(existdata);
    let existstudents = json.students;
    existstudents.push(studentdetails);


    fs.writeFileSync('data.json', JSON.stringify(json, null, 2), (err) => {
      if (err) throw err;
    });
    callback("success");

  }
}