//import required dependicies
import axios from 'axios'
import querystring from 'querystring'
import cookies from 'js-cookie'

export default {
  async login(email, password, next) {
    //send request to the backend
    let response = await axios.post('/api/v1/user/login', querystring.stringify({
      email: email,
      password: password
    }));
    //store the response from the request in a variable
    let data = await response.data;
    //if the api returns with a success true message then continue with the script else return an error
    if (data["success"]) {
      //set the main user cookie
      cookies.set('user-m', data["data"]["token"], { expires: 1 });
      //return that everything was successful
      next(data["success"]);
    } else {
      //return false
      next(data["success"]);
    }
  },
  
  async create(email, password, next) {
    //send a request to the back end
    let response = await axios.post('/api/v1/user/create', querystring.stringify({
      email: email,
      password: password
    }));
    //store the response from the request in a variable
    let data = await response.data;
    //if the api returns with a success true message then continue with the script else return an error
    if (data["success"]) {
      //set the main user cookie
      cookies.set('user-m', data["data"]["token"], { expires: 1 });
      //return that everything was successful
      next(data["success"]);
    } else {
      //return error
      next(data["success"]);
    }
  },

  getToken() {
    //get the token from the cookie
    let token = cookies.get('user-m');
    if (token === undefined || token.length == 0) {
      //return false
      return false;
    } else {
      //return true
      return true;
    }
  }, 

  async getAuthData(cookie, next) {
    let response = await axios.post('/api/v1/user/authdata', querystring.stringify({
      cookie: cookie
    }));
    //store the response from the request in a variable
    let data = await response.data;
    next(data);
  }

}
