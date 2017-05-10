//Requirements
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require("method-override");

var db = require("./models");

var port = process.env.port || 3000;
// Parse application/x-www-form-urlencoded

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




//Serve static content for the app from the "public" directory in the application directory.

var exHandlebars = require("express-handlebars");

app.engine("handlebars", exHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(methodOverride("_method"));
app.use(express.static(process.cwd() + '/public'));

require("./controllers/burgers_controller.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});

