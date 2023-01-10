const joi = require('joi');

const workValidate = (data)=>{
 const Schema = joi.object({
    work:joi.string()
    .min(1)
    .max(100)
    .required(),
 
    type:joi.string()
    .regex(/nhiệm vụ$|vấn đề$/)
    .required(),
    
    progress:joi.string()
    .regex(/hoàn thành$|đang làm$|chưa làm$/)
    .required(),

    status:joi.string()
    .regex(/mới tạo$|hủy bỏ$/)
    .required(),

    priority:joi.string()
    .regex(/rất cao$|cao$|trung bình$|thấp$|rất thấp$/)
    .required(),

    description:joi.string()
    .min(1)
    .max(500)
    .required(),
    
    deadline:joi.date().greater('now'),
 });
 return Schema.validate(data);
}

module.exports.workValidate = workValidate;