const express =require( 'express');
const {sequelize} =require ('./db/connection');
const config = require("./config/index");

const app = express();
const db = require('./db/method');

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

//routes
const TaskRoutes = require("./routes");
app.use("/api/v1", TaskRoutes);

const port = config["port"]

app.listen(config["port"], () => {
    console.log(`Server listening on port: ${port}`);
  });