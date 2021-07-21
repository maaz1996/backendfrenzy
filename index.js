const express =require( 'express');
const {sequelize} =require ('./db/connection');
const config = require("./config/index");
const fetch = require("node-fetch");

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

  let url = 'https://gist.githubusercontent.com/seahyc/de33162db680c3d595e955752178d57d/raw/785007bc91c543f847b87d705499e86e16961379/users_with_purchase_history.json';

  fetch(url)
  .then(res => res.json())
  .then((out) => {
    console.log('Checkout this JSON! ',out);

    out.map(i=>{
        const payload={
            cashBalance:i.cashBalance,
            user_id=i.id,
            name=i.name,
            purchaseHistory=i.purchaseHistory.map(j=>{
                const purchasepayload={
                    purchase_id:j.
                }
            })
        }
        
        console.log(payload)
    })
  })
  .catch(err => { throw err });
// //game routes
// const eventRoute = require("./routes/index");
// app.use("/api/v1", eventRoute);

const port = config["port"]

app.listen(config["port"], () => {
    console.log(`Server listening on port: ${port}`);
  });