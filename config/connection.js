var mysql = require("mysql");
var connnection;
//Connection to the DB
if (process.env.JAWSDB_URL) {
    connnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db",
        port: 8889

    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});



module.exports = connection;