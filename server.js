//Requirements
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var app = express();
var router = require("./controllers/burgers_controller.js");


var port = process.env.PORT || 3000;
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

var exHandlebars = require("express-handlebars");

app.engine("handlebars", exHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use("/", router);

app.listen(port);
