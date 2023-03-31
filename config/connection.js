// Import the Sequelize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

// Create connection to database, pass in MySQL information for username and password
let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });
// }

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "heroku_614641ae3b9689b",
    "be123e735e8c7c",
    "87c1550c",
    {
      host: "us-cdbr-east-06.cleardb.net",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
