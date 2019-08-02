//require the dependicies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const history = require('connect-history-api-fallback')

require('dotenv').config(); //setup .env file

const port = process.env.PORT || 3000;

//initalise express and routes
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(history({
    index: '/'
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
});

app.set('SECRET_KEY', process.env.SECRET_KEY); // jwt secret key used for signing/verification

//user route
const user = require('./server/routes/user');
app.use('/api/v1/user', user);
//student route
const student = require('./server/routes/student');
app.use('/api/v1/student', student);

//listen for the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))