const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");
const { registerValidate ,loginValidate, putvalidate } = require('../validation/validate');
const jwt = require('jsonwebtoken');



const registerUser = asyncHandler(async(req,res)=>{

     // validate user
    const {error} = registerValidate(req.body);
    if(error) return res.status(400).send({success:false, msg:error.details[0].message});
    

    const {image ,name, email, password, isAdmin} = req.body;
    //1. check user đã tồn tại trong database hay chưa
    const Exist = await User.findOne({email});
    if(Exist){
        res.status(400);
        throw new Error("đã có email này trong hệ thống")
    }
    // 2.save to database
    const newUser = await User.create({ name, email, password, isAdmin});
    if(newUser){
        res.status(200).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser.id)
        })
    }
    else{
        res.status(400);
        throw new Error("đã có lỗi khi tạo user")
    }
});


const loginUser = asyncHandler(async(req,res)=>{
    // validate login
    const {error} =loginValidate(req.body);
    if(error) return req.status(400).send({success:false, msg:error.details[0].message});

    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user && await bcrypt.compare(password, user.password)){
        res.json({
            id: user.user,
            name: user.name, 
            email : user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            isAdmin1 : user.isAdmin1,
            isAdmin2 : user.isAdmin2,
            isAdmin3 : user.isAdmin3,
            isAdmin4 : user.isAdmin4,
            isAdmin5 : user.isAdmin5,
            isAdmin6 : user.isAdmin6,
            isAdmin7 : user.isAdmin7,
            isAdmin8 : user.isAdmin8,
            token: generateToken(user.id)
        });
    }
    else{
        res.status(401);
        throw new Error("không đúng mật khẩu hoặc password")
    }
});

const getUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user.id);
    if(user){
        res.json({
            id : user.id,
            name: user.name,
            image:user.image,
            email: user.email,
            age: user.age,
            address: user.address,
            gender: user.gender,
            phone: user.phone,
            textarea: user.textarea,
            isAdmin: user.isAdmin,
            isAdmin1 : user.isAdmin1,
            isAdmin2 : user.isAdmin2,
            isAdmin3 : user.isAdmin3,
            isAdmin4 : user.isAdmin4,
            isAdmin5 : user.isAdmin5,
            isAdmin6 : user.isAdmin6,
            isAdmin7 : user.isAdmin7,
            isAdmin8 : user.isAdmin8,
        })
    }
    else{
        res.status(401);
        throw new Error("User not found")
    }
});

const getAllUser = asyncHandler(async(req,res)=>{
    const user = await User.find({});
    res.json(user)
});

const updateUserProfile = asyncHandler(async(req,res)=>{
    // validate user
    const {error} = putvalidate(req.body);
    if(error) return res.status(400).send({success:false, msg:error.details[0].message});

    const user = await User.findById(req.user.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.image = req.body.image || user.image;
        user.email = req.body.email || user.email;
        user.age = req.body.age || user.age;
        user.address = req.body.address || user.address;
        user.gender = req.body.gender || user.gender;
        user.phone = req.body.phone || user.phone;
        user.textarea = req.body.textarea || user.textarea;
        if (req.body.password) {
            // Tại sao không phải hash password ở đây.
            user.password = req.body.password;
        }

        const updateUser = await user.save();
        res.json({
            id: updateUser.id,
            name: updateUser.name,
            image: updateUser.image,
            email: updateUser.email,
            password: updateUser.password,
            age: updateUser.age,
            address: updateUser.address,
            gender: updateUser.gender,
            phone: updateUser.phone,
            textarea: updateUser.textarea,
            isAdmin: updateUser.isAdmin,
            isAdmin1 : updateUser.isAdmin1,
            isAdmin2 : updateUser.isAdmin2,
            isAdmin3 : updateUser.isAdmin3,
            isAdmin4 : updateUser.isAdmin4,
            isAdmin5 : updateUser.isAdmin5,
            isAdmin6 : updateUser.isAdmin6,
            isAdmin7 : updateUser.isAdmin7,
            isAdmin8 : updateUser.isAdmin8,
        });
    } else {
        res.status(401);
        throw new Error('User not found');
    }
});


const deleteUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        await user.remove();
        res.json({
            message: 'User removed'
        });
    } else {
        res.status(400);
        throw new Error('User not found');
    }
 });
 
 const getUserById = asyncHandler(async(req,res)=>{
    const getUserById = await User.findById(req.params.id);
    if(getUserById){
     res.status(200).json({
         id :getUserById.id,
         name:getUserById.name,
         image: getUserById.image,
         email:getUserById.email,
         password:getUserById.password,
         age:getUserById.age,
         address:getUserById.address,
         gender:getUserById.gender,
         phone:getUserById.phone,
         textarea:getUserById.textarea,
         isAdmin:getUserById.isAdmin,
         isAdmin1:getUserById.isAdmin1,
         isAdmin2:getUserById.isAdmin2,
         isAdmin3:getUserById.isAdmin3,
         isAdmin4:getUserById.isAdmin4,
         isAdmin5:getUserById.isAdmin5,
         isAdmin6:getUserById.isAdmin6,
         isAdmin7:getUserById.isAdmin7,
         isAdmin8:getUserById.isAdmin8,
     })
    }
 });
 
 const putUserById = asyncHandler(async(req,res)=>{
    
    // validate user
    const {error} = putvalidate(req.body);
    if(error) return res.status(400).send({success:false, msg:error.details[0].message});

     const user = await User.findById(req.params.id);
     if (user) {
         user.name = req.body.name || user.name;
         user.email = req.body.email || user.email;
         user.image = req.body.image || user.image;
         user.age = req.body.age || user.age;
         user.address = req.body.address || user.address;
         user.gender = req.body.gender || user.gender;
         user.phone = req.body.phone || user.phone;
         user.textarea = req.body.textarea || user.textarea;
         user.isAdmin = req.body.isAdmin || user.isAdmin;
         user.isAdmin1 = req.body.isAdmin1 || user.isAdmin1;
         user.isAdmin2 = req.body.isAdmin2 || user.isAdmin2;
         user.isAdmin3 = req.body.isAdmin3 || user.isAdmin3;
         user.isAdmin4 = req.body.isAdmin4 || user.isAdmin4;
         user.isAdmin5 = req.body.isAdmin5 || user.isAdmin5;
         user.isAdmin6 = req.body.isAdmin6 || user.isAdmin6;
         user.isAdmin7 = req.body.isAdmin7 || user.isAdmin7;
         user.isAdmin8 = req.body.isAdmin8 || user.isAdmin8;
         if (req.body.password) {
            // Tại sao không phải hash password ở đây.
            user.password = req.body.password;
         }
 
         const updateUser = await user.save();
         id = updateUser.id,
         name = updateUser.name,
         image = updateUser.image,
         email = updateUser.email,
         password =updateUser.password,
         age = updateUser.age,
         address = updateUser.address,
         gender = updateUser.gender,
         phone = updateUser.phone,
         textarea = updateUser.textarea,
         isAdmin1 = updateUser.isAdmin1,
         isAdmin2 = updateUser.isAdmin2,
         isAdmin3 = updateUser.isAdmin3,
         isAdmin4 = updateUser.isAdmin4,
         isAdmin5 = updateUser.isAdmin5,
         isAdmin6 = updateUser.isAdmin6,
         isAdmin7 = updateUser.isAdmin7,
         isAdmin8 = updateUser.isAdmin8,
 
         res.json(updateUser);
     } else {
         res.status(401);
         throw new Error('User not found');
     }
 });

const ForgotPassword = async(req,res)=>{
  const {email} = req.body;
  const user = await User.findOne({email:email});

 if(!user){
    res.status(400).send({success:false, msg:'user not register'})
    res.json(user)
 }

 const secret = JWT_SECRET + user.password;

 const payload = {
    email: user.email,
    id:user.id
 }

 const token = jwt.sign(payload, secret, {expiresIn:'15m'} );
 const link = `http://localhost:5000/api/users/reset-password/${user.id}/${token}`;
 console.log(link);
 res.status(200).send({msg:'password reset link has been sent to your email,'+link});
};

const JWT_SECRET = 'some super secret...';


const ResetPassword = async(req,res)=>{
   const {id, token} = req.params;
   const {password} = req.body;
   const user = await User.findOne({email:req.body.email});

   if(id !== user.id){
    res.status(400).send({success:false, msg:'invalid id'})
   }
   
   const secret = JWT_SECRET + user.password
   try {
     const payload = jwt.verify(token, secret);

     if(user){
        user.password = password||user.password;

        const updateUser = await user.save();
        password = updateUser.password
     }

   } catch (error) {
    res.status(200).send({success:true, msg:"đổi thành công"});

   }
}

module.exports = {
    registerUser, loginUser, getUserProfile, getAllUser, updateUserProfile, deleteUserById, getUserById, putUserById, ForgotPassword, ResetPassword
}