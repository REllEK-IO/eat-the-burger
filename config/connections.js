var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: "baffe6b0292ee7",
    password: "2ba0472d",
    database: "heroku_6b6c419cc62cb82"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;