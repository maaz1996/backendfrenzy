const db = require('./db/method');
const fetch = require("node-fetch");


let url = 'https://gist.githubusercontent.com/seahyc/de33162db680c3d595e955752178d57d/raw/785007bc91c543f847b87d705499e86e16961379/users_with_purchase_history.json';

  fetch(url)
  .then(res => res.json())
  .then(async(out) => {
    out = out.slice(0, 1);
    console.log("welcome here to data", out)
    await db.createTable('purchaseHistory')
    await db.createTable('User')
    // console.log('Checkout this JSON! ',out);
    out.map(async(i)=>{
     
      const payload={
            cashBalance:i.cashBalance,
            user_id:i.id,
            name:i.name,
            purchaseHistory:await Promise.all(i.purchaseHistory.map(async(j)=>{
              const purchasepayload={
                dishName:j.dishName,
                restaurantName:j.restaurantName,
                transactionAmount:j.transactionAmount,
                transactionDate:j.transactionDate
              }
              // const createtable=await db.createTable('purchaseHistory')
              var savedata=  await db.saveData({
                ...purchasepayload,
              }, 'purchaseHistory');
              console.log(savedata.purchase_id)
              return(savedata.purchase_id)
          }))
          
        }
        
        // await db.createTable('User')
                const savedata= await db.saveData({
                  ...payload,
                }, 'User');
              
    })
  })
  .catch(err => { throw err });


  let url2 = 'https://gist.githubusercontent.com/seahyc/b9ebbe264f8633a1bf167cc6a90d4b57/raw/021d2e0d2c56217bad524119d1c31419b2938505/restaurant_with_menu.json';

  fetch(url2)
  .then(res2 => res2.json())
  .then(async(out2) => {
    out2 = out2.slice(0, 2);
    console.log("welcome here to data2", out2)
    await db.createTable('Menu')
    await db.createTable('Restaurant')
    // console.log('Checkout this JSON! ',out);
    out2.map(async(i)=>{
     
      const payload={
            cashBalance:i.cashBalance,
            name:i.name,
            menu:await Promise.all(i.menu.map(async(j)=>{
              const menupayload={
                dishName:j.dishName,
                price:j.price,
                
              }
              // const createtable=await db.createTable('purchaseHistory')
              var savedata=  await db.saveData({
                ...menupayload,
              }, 'Menu');
              console.log(savedata.id)
              return(savedata.id)
          })),
          openingHours:i.openingHours,
          restaurantName:i.restaurantName,
          
        }
        
        // await db.createTable('User')
                const savedata= await db.saveData({
                  ...payload,
                }, 'Restaurant');
              
    })
  })
  .catch(err => { throw err });