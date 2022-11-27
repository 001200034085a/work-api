const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { string } = require('joi');

const workSchema = mongoose.Schema({
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
    }

});

const Work = mongoose.model('Work',workSchema);

module.exports = Work;