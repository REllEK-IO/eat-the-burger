// Import MySQL connection.
var connection = require("../config/connections.js");

//Question mark
//C
//R
//U
//D
var orm = function() {
    var questionMarkGenerator = function(data) {
        if (typeof data === "array") {
            var leng = data.length;
            var questions = "?";
            for (var i = 1; i < arr.length; i++) {
                questions += ",?";
            }
            return questions;
        } else {
            return "?";
        }
    }


    var get = function(data) {
        var initString = "SELECT * FROM burgers";
    }

    var getAll = function() {
        var initString = "SELECT * FROM burgers";
    }

    var set = function() {

    }

    var update = function() {

    }

    var del = function() {

    }

    return {
        questionMarkGenerator: questionMarkGenerator
    }
}();

orm.questionMarkGenerator([1, 1, 1, 1, 1]);

connection.end();