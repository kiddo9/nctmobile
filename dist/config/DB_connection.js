"use strict";
const { Sequelize } = require("sequelize");
//const pg = require("pg");
const mysql = require("mysql2");
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectModule: mysql,
});
connection
    .authenticate()
    .then(() => {
    console.log("Connection to the database has been established successfully.");
})
    .catch((error) => {
    console.error("Unable to connect to the database:", error);
});
module.exports = connection;
