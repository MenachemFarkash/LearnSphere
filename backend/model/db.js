const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Courses",
    password: "Farkash1233",
    port: 5432,
});

client.connect();

module.exports = client;
