// Import the ORM to create functions that will interact with the database.

var orm = require('../config/orm.js');
var colors = require('colors');

var burgers = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
            // Testing/Debugging //
            console.log(colors.inverse.blue("MODELS ALL burger.js: " + JSON.stringify(res)));
        });
    },
    create: function(col, vals, cb){
        orm.create('burgers', col, vals, function(res){
            cb(res);
            console.log(colors.inverse.blue("MODELS CREATE burger.js: " + JSON.stringify(res)));

        });
    },
    update: function(objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, function(res){
            cb(res);
            console.log(colors.inverse.blue("MODELS UPDATE burger.js: " + JSON.stringify(res)));
        });
    },
    delete: function(condition, cb){
        orm.delete('burgers', condition, function(res){
            cb(res);
            console.log(colors.inverse.blue("MODELS DELETE burger.js: " + JSON.stringify(res)));

        });
    }
};


module.exports = burgers;