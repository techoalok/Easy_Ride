const mongoose = require('mongoose');


// Connect to MongoDB
function ConnectToDb(){
    mongoose.connect(process.env.DB_CONNECTION,).then(()=>
    console.log('Connected to MongoDB')).catch((err)=>console.log(err)); 
}

module.exports = ConnectToDb;