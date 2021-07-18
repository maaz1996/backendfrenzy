// var mysql = require('mysql');
// const config =require('../config/index')

//  =mysql.createConnection(`mysql://${config['userid']}:${config['password']}@${config['host']}:${config['dbport']}/${config['dbanme']}?debug=true`);


// module.exports=connection

const Sequelize = require('sequelize');
const config =require('../config/index')

var connection = new Sequelize(
    `${config['dbanme']}`,
    `${config['userid']}`,
    `${config['password']}`,
  {
    dialect: 'postgres',
    host: `${config['host']}`,
    pool: {
      max: 10,
      min: 0,
      idle: 200000,
      acquire: 1000000,
    },
    define: {
      timestamps: false,
    },
    timezone: '+05:30',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);
module.exports=connection