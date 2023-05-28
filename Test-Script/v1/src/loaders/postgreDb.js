const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
});  

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("posgresql connected..");
  } catch {
    console.log("Error DB");
  }
};
module.exports = { sequelize, dbConnection };
