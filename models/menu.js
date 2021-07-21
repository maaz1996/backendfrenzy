const config = require('../config');
const Sequelize = require('sequelize');
const {sequelize} = require('../db/connection');

const Menu = sequelize.define(
  'Menu',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isNumeric: true
      }
    },
    dishName: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL,
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

module.exports = Menu;