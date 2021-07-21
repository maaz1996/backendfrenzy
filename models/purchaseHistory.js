const config = require('../config');
const Sequelize = require('sequelize');
const {sequelize} = require('../db/connection');

const purchaseHistory = sequelize.define(
  'purchaseHistory',
  {
    purchase_id: {
      type: Sequelize.INTEGER(8),
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isNumeric: true
      }
    },
    dishName: {
      type: Sequelize.STRING,
      allowNull: false,
      
    },
    restaurantName: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
    transactionAmount: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    transactionDate: {
      type: Sequelize.DATE,
      allowNull: false,
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

module.exports = purchaseHistory;