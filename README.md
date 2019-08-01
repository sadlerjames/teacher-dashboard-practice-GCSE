# Teacher Dashboard
This is a practice Computer Science GCSE programming task: a teacher dashboard, to be completed in 20 hours worth of coding time

Note: this project uses a data.json file to store dummy data for illustrative purposes. If this project was used in a production environment then you would want to use a database instead of a json file, for example mongoDB, mySQL or etc.

# Scenario
When new students arrive at Tree Road School, they are assigned:
- a unique ID number
- a tutor group
- a unique school email address

A tutor group contains approximately 25 male and female students.

Mr Leeman is a form tutor and wants a simple computer system to manage his tutor group.

Mr Leeman wants to be able to have a user friendly interface that allows him to log into the system and carry out the necessary administration.

The details of the students that Mr Leeman needs are:

- unique ID number
- surname
- forename
- date of birth
- home address
- home phone number
- gender
- tutor group
- unique school email address

Analyse the requirements for this system and design, develop, test and evaluate a program that allows Mr Leeman to:

1. log in with a username and password
2. access a menu system
3. enter and store the students details
4. log out
5. retrieve and display the details of any student when Mr Leeman enters the student's unique ID number
6. create at least three different reports that Mr Leeman might need, and describe how he would use each one
7. produce these reports when selected from a menu

# Running the dashboard

To compile this project from source you need Node.js installed. If you install it from the official website, it will then come with npm, which is also needed for this project to run.


To get this teacher portal up and running locally:
1. Clone the repository

 `git clone https://github.com/sadlerjames/dashboard-template`

2. Install the npm packages for the backend and the frontend

 `npm run post-install`

4. You need to create a `.env` file where you installed the project, and put the following info in it but replacing it with your own details:

```
SECRET_KEY = "<--Replace with random text (no spaces in it)-->"
PORT = 3000
```

3. Start the dashboard

`npm start`

4. Finally go to http://localhost:3000/ to see the project!


Everytime you want to run the dashboard, run:

`npm start`

If you want to run it with nodemon enabled, run:

`npm run dev`

