const jwt = require("jsonwebtoken");

const generateTokenMember = (id)=>{
    return jwt.sign({id} ,"thanhvien")
}

module.exports = generateTokenMember;