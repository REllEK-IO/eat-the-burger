// Import MySQL connection.
var connection = require("../config/connections.js");

//Question mark
//C
//R
//U
//D
var orm = function() {
    //Takes single/array of values that will be inputted. Then returns the
    //number of question marks mySQL needs to insert/create/update/query
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

    //Take object convert into string formatted for mySQL
    var objToSql = function(obj) {
        var arr = [];

        for (var key in ob) {
            if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
            }
        }

        return arr.toString();
    }

    //Set 
    //Data is:
    // {
    //     tableTarget : "?",
    //     cols : "toTarget",
    //     vals : "toQuery",
    // }
    var set = function(data, cb) {
        var queryString = "SELECT * FROM " + data.tableTarget;

        queryString += " (" +
                            data.cols.toString() +
                            ") " +
                            "VALUES (" +
                            questionMarkGenerator(data.vals) +
                            ") ";
        //debug log
        console.log("findAll called: " + queryString);

        connection.query(queryString, data.vals, function(err, res){
            if(err) throw err;

            cb(res);
        });
    }

    //Get all
    //tableTarget = String(table_name)
    var getAll = function(tableTarget, cb) {
        var queryString = "SELECT * FROM " + tableTarget;

        connection.query(queryString, function(err, res){
            if(err) throw err;
            
            cb(res);
        });
    }

    //Get conditional
    
    var get = function(data, cb) {
        var queryString = "SELECT * FROM " + data.tableTarget;
    }

    //Update 
    //Data is:
    // {
    //     tableTarget : "?",
    //     colValues : {text: "?", exist : "?"},
    //     condition : "toQuery",
    // }
    var update = function() {
        var queryString = "UPDATE " + table;

        queryString += " SET " +
                        objToSql(data.colValues) +
                        " WHERE " +
                        data.condition;
    }

    var del = function() {

    }

    return {
        set : set,
        get : get,
        getAll : getAll,
        update : update,
        del : del
    }
}();

//Export to model burger.js
module.exports = orm;