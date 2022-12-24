const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const userSchema = mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String, 
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    textarea:{
        type:String,
        require:true
    },
    isAdmin:{
        type: String, 
        require:true,
        default:false
    },
    member:{
        project:{
            type: Schema.Types.ObjectId,
            ref:'Project',
         },
         user:{
            type: Schema.Types.ObjectId,
            ref:'User',
         },
         project_owner:{
            type: Schema.Types.ObjectId,
            ref:'User',
         },
         status:{
            type:String,
         },
         date:{
            type:String
         },
         role:{
            type:String,
         },
         isAdmin1:{
            type:Boolean,
            default:false,
         },
         isAdmin2:{
            type:Boolean,
            default:true,
         },
         isAdmin3:{
            type:Boolean,
            default:false,
         },
         isAdmin4:{
            type:Boolean,
            default:true,
         },
         isAdmin5:{
            type:Boolean,
            default:true,
         },
         isAdmin6:{
            type:Boolean,
            default:false,
         },
         isAdmin7:{
            type:Boolean,
            default:false,
         },
         isAdmin8:{
            type:Boolean,
            default:false,
         },
    }
});

userSchema.pre('save',async function (next){
//    mã hóa password trước khi lưu vào user database
    if(!this.isModified('password')){
        return next();
    } 
    try{
       const salt = await bcrypt.genSalt(10);
       this.password = await bcrypt.hash(this.password, salt);
       return next();
    }
    catch(err){
        return next(err);
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;