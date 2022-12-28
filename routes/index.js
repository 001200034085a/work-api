var express = require('express');
var router = express.Router();


const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, 'image')
  },
  filename:(req, file, cb)=>{
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
    
  }
});

const upload = multer({storage :storage, 
  limits:{
  fieldSize: 10 * 1024 *1024
  }
});

/* GET home page. */
router.get('/upload', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/upload", upload.single("image"), (req,res)=>{
  res.json({
    msg:"upload image",
    url: 'http://localhost:5000/uploads/'+req.file.filename
  })
});



module.exports = router;
