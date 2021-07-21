const config = require('../config');
const Sequelize = require('sequelize');
const {sequelize} = require('../db/connection');

const Restaurant = sequelize.define(
  'Restaurant',
  {
    id: {
      type: Sequelize.INTEGER,
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
    
    menu: {
      type: Sequelize.JSON({
      type:Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'Menu', key: 'id' }

      }),
      allowNull: false
    },
    openingHours: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    restaurantName: {
        type: Sequelize.STRING,
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

module.exports = Restaurant;