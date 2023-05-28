const Sequelize = require("sequelize");
const {sequelize} = require("../loaders/postgreDb");

const Users = sequelize.define("users", {
  nama: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  npp: {
    type: Sequelize.INTEGER,
  },
  npp_supervisor: {
    type: Sequelize.INTEGER,
  },
  
},{
  timestamps: false, // Disable timestamps
});

module.exports = Users;
