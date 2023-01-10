const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;


const workSchema = mongoose.Schema({
    type:{
        type:String,
        require:true
    },
    work:{
        type:String,
        require:true
    },
    progress:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    priority:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    deadline:{
        type:String, 
        require:true
    }
});

const Work = mongoose.model('Work',workSchema);

module.exports = Work;