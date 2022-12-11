const jwt = require("jsonwebtoken");

const generateToken = (id)=>{
    return jwt.sign({id}, 'masobimat123')
};

const generateTokenMember = (id)=>{
    return jwt.sign({id}, 'thanhvien')
}

// , {expiresIn:'1d'}
module.exports = generateToken;
module.exports  =generateTokenMember;
