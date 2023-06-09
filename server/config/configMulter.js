const multer = require("multer");

try {
    var storage = multer.diskStorage({
        filename: function(req, file, cb) {
            let nome = Date.now() + "-" + file.originalname
            cb(null, nome)
        },
        destination: function(req, file, cb) {
            let path = "uploads/"
            cb(null, path)
        }
    })
} catch (error) {
    console.log("error", error);
}
var upload = multer({ storage })

module.exports = upload;