const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
   project:{
    type:Object,
    require:true
   },
   user:{
    type:Object,
    require:true
   },
   status:{
    type:String,
    require:true
   },
   isAdmin1:{
      type:Boolean,
      require:true,
      default:false
   },
   isAdmin2:{
      type:Boolean,
      require:true,
      default:false
   },
   isAdmin3:{
      type:Boolean,
      require:true,
      default:false
   },
   isAdmin4:{
      type:Boolean,
      require:true,
      default:false
   },
   isAdmin5:{
      type:Boolean,
      require:true,
      default:false
   },
   isAdmin6:{
      type:Boolean,
      require:true,
      default:false
   },
   isAdmin7:{
      type:Boolean,
      require:true,
      default:false
   },
   isAdmin8:{
      type:Boolean,
      require:true,
      default:false
   }
   
});

const Member = mongoose.model('Member',memberSchema);

module.exports = Member;