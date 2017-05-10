
// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the burgers
    app.get("/burgers", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function (data) {
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
        db.Burger.create({
            burger_name: req.body.burger_name

        }).then(function(data) {
            res.redirect('/burgers');
        });
    });
};





/*
router.get('/', function(req, res){
    res.redirect('/burgers')
});
// Land on endpoint /burgers function will initialize ORM ALL function which will enter callback hell
// // Create routes render page with all objects from burgers table in burgers_db
router.get('/burgers', function(req, res){
    burgers.all(function(data){
        var hbsObject = {burgers: data};
        // Testing/Debugging //
        console.log(colors.inverse.red("CONTROLLER data " + JSON.stringify(data)));

        console.log(colors.inverse.red("CONTROLLER Hbs Object" + JSON.stringify(hbsObject)));

        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res){
    burgers.create(['burger_name'], [req.body.b_name], function(data){
        res.redirect('/burgers');
        // Testing/Debugging //
        console.log(colors.inverse.red("CONTROLLER req.body.b_name: " + JSON.stringify(req.body.b_name)));
    });
});

router.put('/burgers/update/:id', function(req, res){
    var condition = 'id = ' + req.params.id;

    console.log(colors.inverse.red('CONTROLLER condition ', condition));

    burgers.update({'devoured': req.body.devoured}, condition, function(data){
        res.redirect('/burgers');
    });
});

router.delete('/burgers/delete/:id', function(req,res){
    var condition = 'id = ' + req.params.id;
    burgers.delete(condition, function (){
        res.redirect("/burgers");
    });
});

module.exports = router;
*/


