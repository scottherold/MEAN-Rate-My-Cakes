// *** Server ***
// <--- Modules --->
const express = require('express');
const bodyParser = require('body-parser');

// <--- Server Constructors --->
const port = process.env.PORT || 8000; // Sets port listening
const app = express();

// <--- Server Settings --->
app.use(bodyParser.json()); // interprets JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/dist/public')); // Angular 

// <--- Database & Server-Side Routing --->
require(__dirname + '/server/config/database'); // DB Connection
require(__dirname + '/server/config/routes')(app); // API routes

// <--- Port Listening --->
app.listen(port, () => console.log(`Express server listening on ${ port }`));