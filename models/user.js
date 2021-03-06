const config = require('../config');
const Sequelize = require('sequelize');
const {sequelize} = require('../db/connection');

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
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
      type: Sequelize.JSON({
      type:Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'purchaseHistory', key: 'purchase_id' }

      }),
      allowNull: false
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