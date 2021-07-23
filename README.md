# backendfrenzy
## Steps to run:
1. Copy ```.env.example``` to ```.env``` and edit according to original credentials
2. ```npm install```
3. ```npm run db``` for extracting , transforming and loading the database
4. ```npm start``` for starting the server


## API Details
1.http://localhost:5000/api/v1/search  POST 
raw JSON BODY:
{
"restaurant":"024 Grille"
} 
OR 
{
"dish":"Chicken Bouillon with Rice (10 min.)"
}


2.http://localhost:5000/api/v1/userpurchase POST

raw JSON BODY:
{
"userid":"3",
"dish":"Fried",
"restaurant":"024 Grille"
}

3.http://localhost:5000/api/v1/toprestaurant POST

raw JSON BODY:
{
"y":"3",
"x":"5",
"pricestart":"150",
"priceend":"200"
}

4.http://localhost:5000/api/v1/openrestaurant POST
raw JSON BODY:
{
    "opentime":"Mon 2:30 pm"
}



## Postman Collection URL
```https://www.getpostman.com/collections/5fdacee7e146346d9f72```
