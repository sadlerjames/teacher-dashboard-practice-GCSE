//import required dependicies
import axios from 'axios'
import querystring from 'querystring'

export default {
  async create(forename, surname, dob, address, phone, gender, tutor, next) {
    //send request to the backend
    let response = await axios.post('/api/v1/student/create', querystring.stringify({
      forename: forename,
      surname: surname,
      dob: dob,
      address: address,
      phone: phone,
      gender: gender,
      tutor: tutor,
    }));
    //store the response from the request in a variable
    let data = await response.data;
    //if the api returns with a success true message then continue with the script else return an error
    if (data["success"]) {
      //return that everything was successful
      next(data["success"]);
    } else {
      //return false
      next(data["success"]);
    }
  }
}
