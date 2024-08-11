// routes/excelroutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('excelFile'), (req, res) => {
    if (!req.file) {
        console.log('No file received');
        return res.status(400).send('No file uploaded.');
    }

    try {
        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        let nodes = {};
        let treeData = [];

        data.forEach((row, index) => {
            if (index > 0 && row.length >= 3) { // Ensure row has at least three columns
                const parentAsset = row[0];
                const assetName = row[2];

                if (!assetName) {
                    console.log(`Skipping incomplete row: ${index}`, row);
                    return; // Skip rows with incomplete data
                }

                if (!nodes[assetName]) {
                    nodes[assetName] = { name: assetName, children: [] };
                }
                if (parentAsset === '0' && !nodes[parentAsset]) {
                    treeData.push(nodes[assetName]);
                } else if (parentAsset !== '0') {
                    if (!nodes[parentAsset]) {
                        nodes[parentAsset] = { name: parentAsset, children: [] };
                        treeData.push(nodes[parentAsset]);
                    }
                    nodes[parentAsset].children.push(nodes[assetName]);
                }
            }
        });

        console.log('Tree Data:', treeData); // Log the constructed tree data
        res.json(treeData);
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).send('Error processing file.');
    }
});

module.exports = router;
