const mongoose = require("mongoose");

const connectDB = async()=>{
    // thực hiện connect đến database;
    try{
        const DBconfig = "mongodb://localhost/user-11";
        
        const connect = await mongoose.connect(DBconfig);
        console.log(`Mongo connect:${connect.connection.host}`)
    }catch(e){
        console.log("Errror connect to  mongoodb ")
    }
}

module.exports = connectDB;