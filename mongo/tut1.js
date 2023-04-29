// Inserting data in mongodb
use yashkart
db.items.insertOne({
    name:"Samsung 30s",price: 22000, rating :4.5 ,qty: 233 , sold: 98
})
db.items.insertMany([{
    name:"Moto 30s",price: 32400, rating :3.5 ,qty: 23 , sold: 9
},
{
    name:"Redmi 30s",price: 40400, rating :4,qty: 230 , sold: 20
}])