const multer = require('multer');
const readExcel = require('../utils/fileHelper').readExcel;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('excelFile');

exports.uploadExcel = (req, res) => {
    upload(req, res, function(err) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const treeData = readExcel(req.file.buffer);
        res.json(treeData);
    });
};
