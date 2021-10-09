// const multer = require('multer');
// const uploadFile = require("./../middleware/uploadFile");


exports.uploadMedia = (req, res, next) =>{
    res.json({ message: "ok upload media"});
}


exports.deleteMedia = (req, res, next) =>{
    res.json({ message: "ok delete media"});
}