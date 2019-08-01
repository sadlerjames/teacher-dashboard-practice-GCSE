const fs = require('fs');
const _ = require("underscore");

module.exports = {
  allinfo: function(email, callback){
    let rawdata = fs.readFileSync('data.json');  
    let data = JSON.parse(rawdata);  
    let filtered = _.where(data['teachers'], {email: email});
    let all = filtered[0];
    callback(all);
  }
}