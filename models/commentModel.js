const mongoose = require("mongoose");
const {Schema} = mongoose;

const commentSchema = mongoose.Schema({
   project:{
      type: Schema.Types.ObjectId,
      ref:'Project',
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