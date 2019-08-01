var fs = require('fs');
var _ = require("underscore");

module.exports = {
  create: function(email){
    let rawdata = fs.readFileSync('../../data.json');  
    let data = JSON.parse(rawdata);  
    let filtered = _.where(data['teachers'], {email: email});
    let all = filtered[0];
    return all;
  }
}