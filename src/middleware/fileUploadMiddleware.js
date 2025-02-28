import multer  from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.resolve("public", "uploads"));
    },

    filename:  (req, file, cb) =>  {
        cb(null, Date.now() + '-' + file.originalname);
    }

});

const uploadFile = multer({ storage: storage });
export default uploadFile;