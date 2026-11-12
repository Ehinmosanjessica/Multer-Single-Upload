const multer = require('multer');

const storage = multer.diskStorage({

    destination: (req, file,cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});


const filefilter = (req,files, cb) => {
    if(file.mimetypes.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error('Only image allowed'))
    }
}


const limits = {
    filesize: 1024 * 1024 * 10
}

const upload = multer({
    storage,
    filefilter,
    limits
});


module.exports = upload;