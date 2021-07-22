const express =require( 'express');
const {sequelize} =require ('./db/connection');
const config = require("./config/index");


const app = express();
const db = require('./db/method');
const { purchaseHistory } = require('./models');
//middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// check db connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.'); 
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err); 
  });


app.get("/", (req, res) => {
    res.status(200).json({
      status: 200,
      result: "Hello World!",
    });
  });

  
// //game routes
// const eventRoute = require("./routes/index");
// app.use("/api/v1", eventRoute);

const port = config["port"]

app.listen(config["port"], () => {
    console.log(`Server listening on port: ${port}`);
  });