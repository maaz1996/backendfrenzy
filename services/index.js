
const db = require('../db/method');
const config =require('../config')
const { Op } = require('sequelize');
const Sequelize = require('sequelize');
module.exports = () => {
  
  const Search = (payload) => {
    return new Promise(async (resolve, reject) => {
      try {
      let result
      if(payload.restaurant){
       result=await db.findByCondition({ restaurantName: payload.restaurant }, 'Restaurant')
      }
      else if(payload.dish){
        result=await db.findByCondition({ dishName: payload.dish }, 'Menu')
      }
     
      if(result && result.length){
        resolve(result)
      }
      else{
        resolve("error")
      }
    
    }
       catch (error) {
        reject(error);
      }
    });
  };
  const userPurchase = (payload) => {
    return new Promise(async (resolve, reject) => {
      try {
      
      
       userresult=await db.findByCondition({ user_id: payload.userid }, 'User')
       dishresult = await db.findByCondition({ dishName: payload.dish }, 'Menu')
       restaurantresult = await db.findByCondition({ restaurantName: payload.restaurant }, 'Restaurant')
     
      if(userresult[0].cashBalance< dishresult[0].price){
        console.log("User doesn't have enough balance")
        resolve("error")
      }
      else if(!(restaurantresult[0].menu.includes(dishresult[0].id))){
        console.log("Restaurant doesn't contain the dish")
        resolve("error")
      }
      else{
        const purchasepayload={
          dishName:dishresult[0].dishName,
          restaurantName:restaurantresult[0].restaurantName,
          transactionAmount:dishresult[0].price,
          transactionDate:new Date().toISOString().slice(0, 19).replace('T', ' ')
        }
        
        // const createtable=await db.createTable('purchaseHistory')
        var savedata= await db.saveData({
          ...purchasepayload,
        }, 'purchaseHistory');
       
      
        var arr= userresult[0].purchaseHistory;
        arr.push(savedata.purchase_id)
        const remainingbal = userresult[0].cashBalance-dishresult[0].price;
        const saveduserdata = await db.updateOneByCondition({cashBalance:remainingbal,
        purchaseHistory:arr}, { user_id: payload.userid }, 'User');
        if(saveduserdata){
          console.log("Transaction Completed successfully")
          resolve(`${userresult[0].name} performed a successful transaction purchasing dish ${payload.dish} worth ${dishresult[0].price} at restaurant: ${payload.restaurant} with transaction id: ${savedata.purchase_id}`)
        }
       
       }
  }
       catch (error) {
        reject(error);
      }
    });
  };
  const topRestaurant = (payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const menu = await db.rawQuery(`SELECT * FROM ${config['schema']}."Menu"
        WHERE price BETWEEN ${payload.pricestart} AND ${payload.priceend};`)
        console.menu
        var resultrows= menu[1].rows
        var arr=[];
        resultrows.map(i=>arr.push(i.id))
  
        console.log(arr[0])
        var rest=await db.findOneByCondition({ menu : {
          $contains: `${arr[0]}`
        }}, 'Restaurant')
        //  await db.rawQuery(`SELECT * FROM ${config['schema']}."Restaurant" where (${config['schema']}."menu"#>'{browsers}') @> `${arr[0]}`) ;`)
        console.log(rest)
        resolve("error")
      
    
    }
       catch (error) {
        reject(error);
      }
    });
  };
  const openRestaurant = (payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(payload.opentime)
        const opentime = await db.rawQuery(`SELECT restaurantName FROM ${config['schema']}."Restaurant"
        WHERE openingHours LIKE '${payload.opentime}%' `)
        console.log(opentime)
        
        resolve("error")
      
    
    }
       catch (error) {
        reject(error);
      }
    });
  };

  return {
    Search,
    userPurchase,
    topRestaurant,
    openRestaurant
  };
};