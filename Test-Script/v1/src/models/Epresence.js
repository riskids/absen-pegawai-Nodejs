const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require("../loaders/postgreDb");
const User = require('./users');

const Epresence = sequelize.define("epresence", {
  id_users: {
    type:Sequelize.INTEGER,
  },
  type: {
    type: Sequelize.STRING,
  },
  isApprove: {
    type: Sequelize.BOOLEAN,
    field: 'is_approve',
  },
  waktu: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'waktu', 
  }
},{
  timestamps: false, // Disable timestamps
});

// Establish the "belongsTo" association
Epresence.belongsTo(User, { foreignKey: 'id_users' });

module.exports = Epresence;
