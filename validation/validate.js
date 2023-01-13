const joi=require("joi");

// validate khi đăng ký người dùng
const registerValidate=(data)=>{
    const Schema=joi.object({
        name:joi.string()
        .min(5)
        .max(100)
        .required(),

        email:joi.string()
        .email()
        .min(6)
        .required(),

        password:joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
        .required(),

        isAdmin:joi.string()
        .regex(/true$|false$/)
    });
    return Schema.validate(data);
};

// validate khi đăng nhập
const loginValidate=(data)=>{
    const Schema=joi.object({

        email:joi.string()
        .email()
        .min(6)
        .required(),

        password:joi.string()
        .min(6)
        .required()
    });
    return Schema.validate(data);
};

// validate putuser;
const putvalidate=(data)=>{
    const Schema=joi.object({
        name:joi.string(),
        

        image:joi.string(),

        age:joi.number()
        .min(1)
        .max(200),
        

        phone:joi.string()
        .pattern(new RegExp('^[0-9]{10,12}$')),
        

        gender:joi.string()
        .regex(/nam$|nữ$/),

        address:joi.string(),
        
        email:joi.string()
        .email()
        .min(6),
        
        password:joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),
        
        textarea:joi.string()
        .max(200),

        isAdmin:joi.string()
        .regex(/true$|false$/)

        
    });
    return Schema.validate(data);
};

module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;
module.exports.putvalidate = putvalidate;
