const mongoose = require("mongoose");
const {Schema} = mongoose;

const commentSchema = mongoose.Schema({
   work:{
      type: Schema.Types.ObjectId,
      ref:'Work',
      require:true
   },
   comment:{
    type:String,
    require:true
   },
   name:{
    type:String,
    require:true,
   }, 
   image:{
      type:String
   }
});

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;