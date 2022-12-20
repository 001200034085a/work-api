const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
   comment:{
    type:String,
    require:true
   },
   name:{
    type:String,
    require:true,
   }
});

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;