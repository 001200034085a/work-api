const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Member = require("../models/memberModel");
const { memberValidate } = require("../validation/memberValidate");



const PostMember = asyncHandler(async(req,res)=>{
    const user = await User.findOne({email: req.body.email});
    if(!user){
        res.status(400).send({mgs:"không tìm thấy user vs email"});
    }

    const member = {
        user: user.id,
        project: req.body.project,
        project_owner: req.body.project_owner,
        status:"pending",
        date:new Date().toISOString(),
        permissions:["p4", "p5"]
    }
    // res.status(200).send(member);

    const newMember = await Member.create(member);
    res.status(200).send(newMember);
});

const ChangeStatusMember = asyncHandler(async(req, res)=>{
   const member = await Member.findById(req.params.memberId);

   const {error} = memberValidate(req.body);
   if(error){
    res.status(400).send({success:false ,msg:error.details[0].message});
   }

   if(!member){
    res.status(400).send({mgs:"không tìm thấy thành viên"});
   }
   
    const status = req.body.action;
    member.status = status;

    if(req.body.action === "refuse"){
        const newMember = await Member.deleteOne({memberId: req.params.memberId});
        res.json("remove member")
    }
    else{
        const newMember = await Member.updateOne({id: req.params.id},{status});
        res.status(200).send(member);
    }
 
});


const GetMember = asyncHandler(async(req,res)=>{
    const member = await Member.findById(req.params.id);
    res.json(member)
});

const GetAllMember = asyncHandler(async(req,res)=>{
    const member = await Member.find({});
    res.json(member)
})

const PutMember = asyncHandler(async(req,res)=>{

    const member = await Member.findById(req.params.id);
    if(member){
        
        member.permissions = req.body.permissions || member.permissions;

        const updateMember = await member.save();
        id = updateMember.id;
        permissions = updateMember.permissions;

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
    PostMember, GetMember, GetAllMember, PutMember, DeleteMember, ChangeStatusMember
}