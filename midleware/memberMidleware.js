const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Member = require('../models/memberModel');
const Project = require("../models/projectModel");

const protectMember = asyncHandler(async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization && authorization.startsWith('Bearer')) {
        // Check tiếp xem token có thực sự hợp lệ hay không
        try {
            // Bearer abcdddf.xdffdt.xfcdfd -> ['Bearer', 'abcdddf.xdffdt.xfcdfd'];
            const token = req.headers.authorization.split(' ')[1];
            const memberVerify = jwt.verify(token, 'masobimat123');
            console.log('memberVerify', memberVerify);
            const memberInfo = await Member.findById(memberVerify.id);
            console.log('memberInfo', memberInfo);
            req.user = memberInfo;
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

const isAdmin1 = (req, res, next) => {
    if (req.user && req.user.isAdmin1) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin1');
    }
};

const isAdmin5 = (req, res, next) => {
    if (req.user && req.user.isAdmin5) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin5');
    }
};



module.exports ={
    protectMember,
    isAdmin1,
    isAdmin5,
}