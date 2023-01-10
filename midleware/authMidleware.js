const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { db } = require('../models/userModel');
const User = require('../models/userModel');

// 1. Kiểm tra xem token có hợp lệ hay không
// Có gửi token lên hay không
const protect = asyncHandler(async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization && authorization.startsWith('Bearer')) {
        // Check tiếp xem token có thực sự hợp lệ hay không
        try {
            // Bearer abcdddf.xdffdt.xfcdfd -> ['Bearer', 'abcdddf.xdffdt.xfcdfd'];
            const token = req.headers.authorization.split(' ')[1];
            const userVerify = jwt.verify(token, 'masobimat123');
            console.log('userVerify', userVerify);
            const userInfo = await User.findById(userVerify.id).select('-password');
            console.log('userInfo', userInfo);
            req.user = userInfo;
            
            // req.user = await User.findById(userVerify.id).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('token invalid');
        }
    } else {
        res.status(401);
        throw new Error('Not authorization or no token or token invalid');
    }
});

// 2. Kiểm tra user đang gửi lên token có phải là admin hay không ?
const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin');
    }
};

const isAdmin4 = (req, res, next) => {
  const {id} = req.params;

  const users = req.user.member.work.filter(x => x.work = id);
  const index = users.findIndex(x=>x == id)

      if (req.user && req.user.member.isAdmin4[index] == "true") {
        next();
      } else {
        res.status(401);
        throw new Error('Member is not admin4');
      }
    
};

const isAdmin1 = (req, res, next) => {
    const {id} = req.params;

    const users = req.user.member.project.filter(x => x.project = id);
    const index = users.findIndex(x=>x == id)

      if (req.user && req.user.member.isAdmin1[index] == "true") {
        next();
      } else {
        res.status(401);
        throw new Error('Member is not admin1');
      }
};

const isAdmin2 = (req, res, next) => {
    const {id} = req.params;

    const users = req.user.member._id.filter(x => x._id = id);
    const index = users.findIndex(x=>x == id)
    
      if (req.user && req.user.member.isAdmin2[index] == "true") {
        next();
      } else {
        res.status(401);
        throw new Error('Member is not admin2');
      }
    
};

const isAdmin3 = (req, res, next) => {
  const {id} = req.params;

  const users = req.user.member.project.filter(x => x.project = id);
  const index = users.findIndex(x=>x == id)
   
      if (req.user && req.user.member.isAdmin3[index] == "true") {
        next();
      } else {
        res.status(401);
        throw new Error('Member is not admin3');
      }
    
};


const isAdmin5 = (req, res, next) => {
  const {id} = req.params;

  const users = req.user.member.work.filter(x => x.work = id);
  const index = users.findIndex(x=>x == id)
   
      if (req.user && req.user.member.isAdmin5[index] == "true") {
        next();
      } else {
        res.status(401);
        throw new Error('Member is not admin5');
      }
    
};

const isAdmin6 = (req, res, next) => {

    const {id} = req.params;

    const users = req.user.member.project.filter(x => x.project = id);
    const index = users.findIndex(x=>x == id)
   
      if (req.user && req.user.member.isAdmin6[index] == "true") {
        next();
      } else {
        res.status(401);
        throw new Error('Member is not admin6');
      } 
};

const isAdmin7 = (req, res, next) => {

    const {id} = req.params;

    const users = req.user.member.project.filter(x => x.project = id);
    const index = users.findIndex(x=>x == id)
    
      if (req.user && req.user.member.isAdmin7[index] == "true") {
        next();
      } else {
        res.status(401);
        throw new Error('Member is not admin7');
      }
    
};


const isAdmin8 = (req, res, next) => {

    const {id} = req.params;

    const users = req.user.member._id.filter(x => x._id = id);
    const index = users.findIndex(x=>x == id)
  
      if (req.user && req.user.member.isAdmin8[index] == "true") {
        next();
      } else {
        res.status(401);
        throw new Error('Member is not admin8');
      }
    
};

const checkProject = (req ,res, next)=>{
    const {id} = req.params;

    const users = req.user.member.project.filter(x => x.project = id);
    const index = users.findIndex(x=>x == id)
    
    if(req.user.member.project[index] != id){
      res.status(400).send({ msg:"không phải thành viên dự án này"});
    } 
    next(); 
    
}





module.exports = {
    protect,
    isAdmin,
    isAdmin1,
    isAdmin2,
    isAdmin3,
    isAdmin4,
    isAdmin5,
    isAdmin6,
    isAdmin7,
    isAdmin8,
    checkProject
}