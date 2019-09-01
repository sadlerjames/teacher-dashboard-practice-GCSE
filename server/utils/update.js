var fs = require('fs');
var _ = require("underscore");

module.exports = {
  personalUpdate: function (id, forename, surname, dob, gender, callback) {    
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    let filtered = _.where(data['students'], { id: id });
    let all = filtered[0];

    all.forename = forename;
    all.surname = surname;
    all.dob = dob;
    all.gender = gender;

    fs.writeFileSync('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
    });
    callback("success");

  },
  schoolUpdate: function (id, tutorGroup, callback) {    
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    let filtered = _.where(data['students'], { id: id });
    let all = filtered[0];

    all.tutorGroup = tutorGroup;

    fs.writeFileSync('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
    });
    callback("success");

  }
}