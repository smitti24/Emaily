const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const app = express();

// Middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());
// Parses any request and assigns it to the req.body property.
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production'){ 
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  // if any request comes in for anything, and we do not understand what its looking for, 
  // then look in the client/build directory to see if there is a file that matches it.. then respond with it
  app.use(express.static('client/build')); 

  // Express wil serve up the index.html file
  // if it doest recognise the route.

  // if someone requests a route/file we dont understand, just route them to the index.html file (Catch all case)
  const path = require('path');
  // if we have nothing inside auth routes / auth billing file and there is no file inside client/build directory 
  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`)
});
