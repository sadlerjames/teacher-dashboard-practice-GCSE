const fs = require('fs');
const _ = require("underscore");

module.exports = {
  allinfo: function (email, callback) {
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    let filtered = _.where(data['teachers'], { email: email });
    let all = filtered[0];
    callback(all);
  },
  allStudents: function (callback) {
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    let filtered = _.where(data['students']);
    callback(filtered);
  },
  allData: function (id, callback) {
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    let filtered = _.where(data['students'], { id: id });
    let all = filtered[0];
    //if the id entered returns null try forename
    if (all === undefined || all.length == 0) {
      let filtered = _.where(data['students'], { forename: id });
      let all = filtered[0];
      //if the forename entered returns null try surname
      if (all === undefined || all.length == 0) {
        let filtered = _.where(data['students'], { surname: id });
        let all = filtered[0];
        callback(all);
      } else {
        //no user found
        callback(all);
      }
    } else {
      //returns the users details
      callback(all);
    }
  }
}