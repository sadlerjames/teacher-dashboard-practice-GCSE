# Dashboard Template - Node and Vue
This is a Node and Vue powered dashboard that consists of a Login and Signup form as well as a dashboard for the user to interact with.
The purpose of this is just a template that can be used in other projects.

To compile this from source you need Node.js installed. You will also need to have a database setup, with a table called users. To create this table run the following command:

```
CREATE TABLE users(
    id INT,
    email VARCHAR(255),
    password VARCHAR(255),
    createdAt VARCHAR(255),
    updatedAt VARCHAR(255)
);
```

To get this dashboard up and running locally:
1. Clone the repository

 `git clone https://github.com/sadlerjames/dashboard-template`

2. Install the npm packages for the backend and the frontend

 `npm run post-install`

4. You need to create a `.env` file where you installed the project, and put the following info in it but replacing it with your own details:

```
SECRET_KEY = "<--Replace with random text (no spaces in it)-->"
PORT = 3000
DB_HOST = "<--Replace with your database host-->"
DB_USERNAME = "<--Replace with your database username-->"
DB_PASSWORD = "<--Replace with your database password-->"
DB_NAME = "<--Replace with your database name-->"
DB_DIALECT = "<--Replace with your database dialect (e.g. mysql, sqlite ...)-->"
```

3. Start the dashboard

`npm start`

4. Finally go to http://localhost:3000/ to see the project!

However, if you would like to use this repository as a template then click on the "Use this template" button and follow the required steps. After following the required steps follow steps 2 and onwards.

Everytime you want to run the dashboard, run:

`npm start`

If you want to run it with nodemon enabled, run:

`npm run dev`

