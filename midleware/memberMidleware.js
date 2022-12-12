const Member = require("../models/memberModel");

const auth = permission =>{
    return (req, res, next)=>{
        const {permissions} = req.body;
        if(!permissions){
            return res.status(400).send({msg:"không tìm thấy member"})
        }
        if(!permission.includes(permissions)){
            return res.status(400).send({msg:"bạn không có quyền"})
        }

        next();
    }
};

module.exports = auth;