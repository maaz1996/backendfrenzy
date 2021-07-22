
const db = require('../db/method');
module.exports = () => {
  
  const search = (payload) => {
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

  return {
    search,
  };
};