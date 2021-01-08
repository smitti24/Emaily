1. create server directory
2. npm init
3. npm i express --save

Node:  
- Javascript runtime used to EXECUTE CODE OUTSIDE THE BROWSER.
- Javascript code has always been executed inside of the web browser.
- Listens on a specific port, then routes the request to the express app.

Express: 
- Library that runs in the node runtime. Makes dealing with HTTP traffic easier. Not Standalone
- Collection of functions and helpers.
- Decides what to do with the request.
- Sends responce back to node server.

4. Create index.js
5. Set up deployment to heroku.
- Create dynamic port binding.
-- const PORT = process.env.PORT || 4000;

- Specify node evironment / version.
-- package.json - set specific node and npm versions here:
"engines": {
    "node":"8.8.1",
    "npm": "5.0.3"
  },
  
- Specify start port
-- package.json - Replace:
  "scripts": {
    "start": "node index.js"
  },
  
- Create .gitignore file
-- to not commuit any dependencies whe installed.

6. Init git repository.
git init
git add .
git commit -m "initial commit"

7. Heroku setup
install heroku cli
heroku login
heroku create

8. Deploy Heroku app
git remote add heroku https://git.heroku.com/stark-plains-94295.git
git push heroku master
heroku open
heroku logs -  to check if there is issues.

9. To re-deploy application:
git add .
git commit -m "changed greeting"
git push heroku master

10. Passport.js
- Automate majority of OAuth flow.
- 2 different libraries
-- Passport -> General helpers for handling auth in Express apps.
-- Passport strategies -> Set up authentication with specific providers (Google, facebook etc)
-- https://github.com/jaredhanson/passport-google-oauth2
npm install passport --save passport-google-oauth20
- Create new project in google dev console to get ClientId and Secret.

11. Securing client secret
- Create config/keys.js (Never commit to git)

12. Nodemon setup:
- Automatically restarts server when a file is changed.
-- npm install webpack --save-dev
-- npm install --save nodemon
-- Add "dev": "nodemon index.js" to scripts in package.json

13. Storing the user inside of MongoDB
- Stores records into collections with many different records (POJO).
- Mongoose.js
-- Model Class 
--- Represents an entire MongoDB collection
--- Model Instances javascript objects that represent one record inside the MongoDB collection.
--- COLLECTIONS are created by making a MODEL CLASS
--- Wants to know all the different properties our records will have.
--- Can add in and remove properties at any time

14. Save user record to MongoDB Collection.
- Sometimes when running tests (Mocha, Jest), your models files will be require multiple times. (You have already loaded in that model before)
-- Schema hasn't been registered for model "users".
--- Order of required statements can result in errors in our application,
--- Models are required in the index.js file.
- Everytime we interact with the DB it is a asynchronous query.

# Issue with connection to mongodb -> had to change mongo node version to 2.2 on MongoDB.

15. Mongoose Queries
* Query returns a promise
* Promise -> tool that is used to handle asynchronous requests
*  User.findOne({googleId: profile.id})

16. Passport Callbacks