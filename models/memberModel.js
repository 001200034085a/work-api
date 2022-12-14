const mongoose = require("mongoose");
const { Schema } = mongoose;

// const memberSchema = mongoose.Schema({
//    project_id:{
//     type:Object,
//     require:true
//    },
//    user:{
//     type:Object,
//     require:true
//    },
//    status:{
//     type:String,
//     require:true
//    },
//    isAdmin1:{
//       type:Boolean,
//       require:true,
//       default:false
//    },
//    isAdmin2:{
//       type:Boolean,
//       require:true,
//       default:false
//    },
//    isAdmin3:{
//       type:Boolean,
//       require:true,
//       default:false
//    },
//    isAdmin4:{
//       type:Boolean,
//       require:true,
//       default:false
//    },
//    isAdmin5:{
//       type:Boolean,
//       require:true,
//       default:false
//    },
//    isAdmin6:{
//       type:Boolean,
//       require:true,
//       default:false
//    },
//    isAdmin7:{
//       type:Boolean,
//       require:true,
//       default:false
//    },
//    isAdmin8:{
//       type:Boolean,
//       require:true,
//       default:false
//    }
   
// });

// const Member = mongoose.model('Member',memberSchema);

// module.exports = Member;

const memberSchema = mongoose.Schema({
   // id: Schema.Types.ObjectId,
     
   project:{
      type: Schema.Types.ObjectId,
      ref:'Project',
      require:true
   },
   user:{
      type: Schema.Types.ObjectId,
      ref:'User',
      require:true
   },
   project_owner:{
      type: Schema.Types.ObjectId,
      ref:'User',
      require:true
   },
   status:{
      type:String,
      require:true
   },
   date:{
      type:String
   },
   isAdmin1:{
      type:Boolean,
      require:true,
      default:false,
   },
   isAdmin2:{
      type:Boolean,
      require:true,
      default:true,
   },
   isAdmin3:{
      type:Boolean,
      require:true,
      default:false,
   },
   isAdmin4:{
      type:Boolean,
      require:true,
      default:true,
   },
   isAdmin5:{
      type:Boolean,
      require:true,
      default:true,
   },
   isAdmin6:{
      type:Boolean,
      require:true,
      default:false,
   },
   isAdmin7:{
      type:Boolean,
      require:true,
      default:false,
   },
   isAdmin8:{
      type:Boolean,
      require:true,
      default:false,
   },
   token :{
      type:String
   }
  
   
});

const Member = mongoose.model('Member',memberSchema);

module.exports = Member;
