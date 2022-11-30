const mongoose = require ('mongoose');

const projectSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    textarea:{
        type:String,
        require:true
    },
    deadline:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;