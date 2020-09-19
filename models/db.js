const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// create connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
});

// open connection
connection.connect(e => {
    if (e) throw e;
    console.log("success connect to db");
});

module.exports = connection;