const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: 5000 || process.env.PORT,
  host: process.env.HOST,
  userid: process.env.USERID,
  password: process.env.PASSWORD,
  dbanme: process.env.DBAME,
  dbport:process.env.DBPORT
  
};