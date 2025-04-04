const {Pool} = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "postgres", // Replace with your PostgreSQL username
    database: "top_users",
    password: "32710019numB$", // Replace with your PostgreSQL password
    port: 5432
});