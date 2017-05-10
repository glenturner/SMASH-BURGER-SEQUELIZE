
// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the burgers
    app.get("/burgers", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.burger.findAll({}).then(function (data) {
            var hbsObject = {burgers: data};

            res.render('index', hbsObject);
            // Testing/Debugging //
            console.log(hbsObject);
        });
    });
    // POST route for saving a new burger
    app.post("/burgers/create", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        console.log("This is req.body " + JSON.stringify(req.body));
        db.burger.create({
            burger_name: req.body.burger_name

        }).then(function(data) {
            res.redirect('/burgers');
        });
    });

    // PUT route for updating burgers. We can get the updated todo data from req.body
    app.put("/burgers/update/:id", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.burger.update({
           /* burger_name: req.body.burger_name,*/
            devoured: 1
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.json(data);
        });
        res.redirect("/burgers");
        // Testing/Debugging //
        console.log("SMASHED!");
    });

// DELETE route for deleting burgers. We can get the id of the todo to be deleted from
// req.params.id
    app.delete("/burgers/delete/:id", function(req, res) {
        // We just have to specify which todo we want to destroy with "where"
        db.burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.json(data);
        });
        res.redirect("/burgers");
        // Testing/Debugging //
        console.log("TRASHED!");

    });


};




