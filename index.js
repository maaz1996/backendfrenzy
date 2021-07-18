const express =require( 'express');
const connection =require ('./db/connection');
const config = require("./config/index");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// check db connection
connection.authenticate().then(() => {
    console.log('Connection has been established successfully.'); 
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err); 
  });


app.get("/", (req, res) => {
    res.status(200).json({
      status: 200,
      result: "Hello World,Calender App",
    });
  });

// //game routes
// const eventRoute = require("./routes/index");
// app.use("/api/v1", eventRoute);

const port = config["port"]

app.listen(config["port"], () => {
    console.log(`Server listening on port: ${port}`);
  });