const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");
const Work = require("../models/workModel");
const { workValidate } = require("../validation/workValidate");


const PostWork = asyncHandler(async(req,res)=>{

    const {error} = workValidate(req.body);
    if(error) return res.status(400).send({success:false, msg:error.details[0].message});

   const {work, progress, status, priority, description, deadline} = req.body;
   const works = await Work.findOne({work});

   if(works){
    res.status(400).send({success:false, msg:'đã có công việc này'})
   }

   const newWork = await Work.create({work, progress, status, priority, description, deadline});
   if(newWork){
      res.status(200).json({
        id: newWork.id,
        work: newWork.work,
        progress: newWork.progress,
        status: newWork.status,
        priority: newWork.priority,
        description :newWork.description,
        deadline: newWork.deadline,
      })
   }
   else{
    res.status(400);
        throw new Error("đã có lỗi khi tạo work")
   }
});

const GetAllWork = asyncHandler(async(req,res)=>{
   const works = await Work.find({});
   res.json(works)
});

const putWorkById = asyncHandler(async(req,res)=>{
  const works = await Work.findById(req.params.id);

  if(works){
    works.work = req.body.work || works.work;
    works.progress = req.body.progress || works.progress;
    works.status = req.body.status || works.status;
    works.priority = req.body.priority || works.priority;
    works.description = req.body.description || works.description;
    works.deadline = req.body.deadline || works.deadline;

    const updateWork = await works.save();
    id = updateWork.id,
    work = updateWork.work,
    progress = updateWork.progress,
    status = updateWork.status,
    priority = updateWork.priority,
    description = updateWork.description,
    deadline = updateWork.deadline, 

    res.json(updateWork);
  }
  else{
    res.status(400);
    throw new Error('work not found')
  }
});

const DeleteWork = asyncHandler(async(req, res)=>{
   const works = await Work.findById(req.params.id);
   if(works){
    await works.remove();
    res.status(200).json({
        msg:'work remove'
    })
   }
   else{
    res.status(400);
      throw new Error('work not found');
   }
});

const putUserById = asyncHandler(async(req,res)=>{
  const works = await Work.findById(req.params.id);

  if(works){
    
    works.progress = req.body.progress || works.progress;
    
    const updateWork = await works.save();
    id = updateWork.id,
    
    progress = updateWork.progress,
    

    res.json(updateWork);
  }
  else{
    res.status(400);
    throw new Error('work not found')
  }
})

module.exports ={
    PostWork, GetAllWork, putWorkById, DeleteWork, putUserById
}