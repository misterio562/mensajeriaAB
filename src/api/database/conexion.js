const mysql = require("mysql");

const createConnection = () => {
  return mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "MensajeriaDB",
  });
};

module.exports = {
  createConnection,
};