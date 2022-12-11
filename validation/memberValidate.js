const joi = require("joi");

const memberValidate = (data)=>{
    const Schema = joi.object({
      action:joi.string()
      .regex(/accept$|refuse$/)
    });
    return Schema.validate(data);
};

module.exports.memberValidate = memberValidate
