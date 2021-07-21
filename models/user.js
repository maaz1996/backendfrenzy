const config = require('../config');
const Sequelize = require('sequelize');
const {sequelize} = require('../db/connection');

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: Sequelize.INTEGER(8),
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isNumeric: true
      }
    },
    cashBalance: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    purchaseHistory: {
      type: Sequelize.TEXT,
      allowNull: false,
      references: { model: 'purchaseHistory', key: 'purchase_id' }
    },
    
  },
  {
   schema: `${config["schema"]}`,
    freezeTableName: true,
    timestamps: true,
    collate: 'utf8_unicode_ci',
    charset: 'utf8',
  }
);

module.exports = User;