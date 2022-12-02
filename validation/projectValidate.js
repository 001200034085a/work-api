const joi = require("joi");

const projectValidate = (data)=>{
  const Schema=joi.object({
    title:joi.string()
    .min(1)
    .max(100)
    .required(),

    textarea:joi.string()
    .min(1)
    .max(1000)
    .required(),

    status:joi.string()
    .regex(/$Đang thực hiện|Đã hoàn thành$|Bị hủy bỏ$/)
    .required(),

    deadline:joi.date().greater('now'),
    
    
});
return Schema.validate(data);
};

module.exports.projectValidate = projectValidate;