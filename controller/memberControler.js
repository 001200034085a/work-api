const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Member = require("../models/memberModel");
const generateToken = require("../utils/generateToken");




const GetAllMember = asyncHandler(async(req,res)=>{
    const member = await Member.find({});
    res.json(member)
});

const PutMember = asyncHandler(async(req,res)=>{

    const member = await Member.findById(req.params.id);
    if(member){
        
        member.isAdmin1 = req.body.isAdmin1 || member.isAdmin1;
        member.isAdmin2 = req.body.isAdmin2 || member.isAdmin2;
        member.isAdmin3 = req.body.isAdmin3 || member.isAdmin3;
        member.isAdmin4 = req.body.isAdmin4 || member.isAdmin4;
        member.isAdmin5 = req.body.isAdmin5 || member.isAdmin5;
        member.isAdmin6 = req.body.isAdmin6 || member.isAdmin6;
        member.isAdmin7 = req.body.isAdmin7 || member.isAdmin7;
        member.isAdmin8 = req.body.isAdmin8 || member.isAdmin8;

        const updateMember = await member.save();
        id = updateMember.id;
        isAdmin1 = updateMember.isAdmin1,
        isAdmin2 = updateMember.isAdmin2,
        isAdmin3 = updateMember.isAdmin3,
        isAdmin4 = updateMember.isAdmin4,
        isAdmin5 = updateMember.isAdmin5,
        isAdmin6 = updateMember.isAdmin6,
        isAdmin7 = updateMember.isAdmin7,
        isAdmin8 = updateMember.isAdmin8

        res.json(updateMember)
    }
    else{
        res.status(401);
        throw new Error('Member not found');
    }
    
});

const DeleteMember = asyncHandler(async(req,res)=>{
    const member = await Member.findById(req.params.id);
    if(member){
        await member.remove();
        res.json({
            message: 'member removed'
        });
    }
    else{
        res.status(400);
        throw new Error('member not found');
    }
})


module.exports = {
     GetAllMember, PutMember, DeleteMember
}