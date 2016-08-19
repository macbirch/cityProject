// Ads express to our project
const express = require('express');
//Adds express handlears to our project
const exphbs = require('express-handlebars');
//Adds sequelize to the project
const sequelize = require('sequelize');

const app = express();

// Define folder for public assets
app.use(express.static('public'));

//Set the view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Set up a connection to our database
const db = new sequelize('testdb', 'root', 'Bullshit1');

const status = db.define('status', {
  username: sequelize.STRING,
  text_status: sequelize.STRING
});

//update database to reflect shcnges
//db.sync().then();
db.sync().then(function () {
  return status.create({
    username: "Tom Cruise",
    text_status: "I'm ready to kick some tires and light some fires"
  });
});
// This function renders our home page
app.get('/', function (req, res) {

status.findAll().then(function(statuses) {
  res.render('home.handlebars',
  {title: "Changing the title!", statuses: statuses});
});
});
// This function renders our about page
  app.get('/about', function (req, res) {
    res.render('about', {title: "About"});
  });
  // This function renders our about page
    app.get('/contact', function (req, res) {
      res.render('contact', {title: "Contact"});
    });

  const port = 3000;
  app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
  });



//const http = require('http');
/*const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});





/*const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}); */

/* app.listen(port, function () {
  console.log("Example app listening on port " + port + "!");
});

/*server.listen(port, hostname, function() {
    console.log("`Server running at http://" + hostname + ":" + port);
}); */
