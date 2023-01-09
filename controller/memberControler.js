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

    // const member = {
    //     user: user.id,
    //     project: req.body.project,
    //     project_owner: req.body.project_owner,
    //     status:"pending",
    //     date:new Date().toISOString(),
    //     permissions:["p4", "p5"]
    // }
    // res.status(200).send(member);
    
    const newMember = await Member.create({user: user.id,
        project: req.body.project,
        project_owner: req.body.project_owner,
        work: req.body.work,
        status:"pending",
        date:new Date().toISOString(),
        role: req.body.role,
        isAdmin1: req.body.isAdmin1,
        isAdmin2: req.body.isAdmin2,
        isAdmin3: req.body.isAdmin3,
        isAdmin4: req.body.isAdmin4,
        isAdmin5: req.body.isAdmin5,
        isAdmin6: req.body.isAdmin6,
        isAdmin7: req.body.isAdmin7,
        isAdmin8: req.body.isAdmin8,
    });

    

    res.status(200).json({
        id: newMember.id,
        user: newMember.user,
        project: newMember.project,
        project_owner: newMember.project_owner,
        status: newMember.status,
        date: newMember.date,
        role: newMember.role,
        isAdmin1: newMember.isAdmin1,
        isAdmin2: newMember.isAdmin2,
        isAdmin3: newMember.isAdmin3,
        isAdmin4: newMember.isAdmin4,
        isAdmin5: newMember.isAdmin5,
        isAdmin6: newMember.isAdmin6,
        isAdmin7: newMember.isAdmin7,
        isAdmin8: newMember.isAdmin8
    });
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
        const newMember = await Member.findByIdAndDelete(req.params.memberId);
        res.json("remove member")
    }
    else{
        const newMember = await Member.findByIdAndUpdate((req.params.memberId),{status});
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
        member.role = req.body.role || member.role;
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
        role = updateMember.role;
        isAdmin1 = updateMember.isAdmin1;
        isAdmin2 = updateMember.isAdmin2;
        isAdmin3 = updateMember.isAdmin3;
        isAdmin4 = updateMember.isAdmin4;
        isAdmin5 = updateMember.isAdmin5;
        isAdmin6 = updateMember.isAdmin6;
        isAdmin7 = updateMember.isAdmin7;
        isAdmin8 = updateMember.isAdmin8;

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