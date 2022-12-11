const mongoose = require("mongoose");

const connectDB = async()=>{
    // thực hiện connect đến database;
    try{
        const DBconfig = "mongodb://localhost/user-11";
        // const DBconfig = "mongodb+srv://dangtienphu23:phu123456@work-api.u9mfskn.mongodb.net/work-api?retryWrites=true&w=majority";
        // const DBconfig = "mongodb+srv://dangtienphu23:phu123456@history.ifodqdi.mongodb.net/history?retryWrites=true&w=majority";
         
        const connect = await mongoose.connect(DBconfig);
        console.log(`Mongo connect:${connect.connection.host}`)
    }catch(e){
        console.log("Errror connect to  mongoodb ")
    }
}

module.exports = connectDB;