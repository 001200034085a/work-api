const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
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

const isAdmin1 = (req, res, next) => {
    if (req.user && req.user.isAdmin1) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin1');
    }
};

const isAdmin2 = (req, res, next) => {
    if (req.user && req.user.isAdmin2) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin2');
    }
};

const isAdmin3 = (req, res, next) => {
    if (req.user && req.user.isAdmin3) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin3');
    }
};

const isAdmin4 = (req, res, next) => {
    if (req.user && req.user.isAdmin4) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin4');
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

const isAdmin6 = (req, res, next) => {
    if (req.user && req.user.isAdmin6) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin6');
    }
};

const isAdmin7 = (req, res, next) => {
    if (req.user && req.user.isAdmin7) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin7');
    }
};

const isAdmin8 = (req, res, next) => {
    if (req.user && req.user.isAdmin8) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin8');
    }
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
    isAdmin8
}