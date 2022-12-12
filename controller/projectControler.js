const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");
const {projectValidate} = require("../validation/projectValidate");


const PostProject = asyncHandler(async(req, res)=>{
    // const {error} = projectValidate(req.body);
    // if(error) return res.status(400).send({success:false, msg:error.details[0].message});

    const {title, textarea, deadline, status} = req.body;

    const project = await Project.findOne({title});
    if(project){
        res.status(400);
        throw new Error('đã có dự án này rồi');
    }
    const newProject = await Project.create({title, textarea, deadline, status});
    if(newProject){
        res.status(200).json({
            id:newProject.id,
            title:newProject.title,
            textarea:newProject.textarea,
            deadline:newProject.deadline,
            status:newProject.status
        });
    }
    else{
        res.status(400);
        throw new Error('lỗi khi tạo dự án');
    }
});

const GetProject = asyncHandler(async(req,res)=>{
    const project = await Project.find({});
    res.json(project);
});

const DeleteProject = asyncHandler(async(req,res)=>{
    const project = await Project.findById(req.params.id);
    if (project) {
        await project.remove();
        res.json({
            message: 'project removed'
        });
    } else {
        res.status(400);
        throw new Error('project not found');
    }
});

const PutProject = asyncHandler(async(req, res)=>{
    const {error} = projectValidate(req.body);
    if(error) return res.status(400).send({success:false, msg:error.details[0].message});

    const project = await Project.findById(req.params.id);
    if(project){
        project.title = req.body.project || project.title;
        project.textarea = req.body.textarea || project.textarea;
        project.status = req.body.status || project.textarea;
        project.deadline = req.body.deadline || project.deadline;

        const updateProject = await project.save();
        id = updateProject.id;
        title = updateProject.title;
        textarea = updateProject.textarea;
        status = updateProject.status;
        deadline = updateProject.deadline;

    res.json(updateProject)
    }
    else{
        res.status(401);
        throw new Error('project not found');
    }
    
});



module.exports = {
    PostProject, GetProject, DeleteProject, PutProject
}