const xlsx = require('xlsx');

exports.readExcel = function(buffer) {
    const workbook = xlsx.read(buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    let treeData = []; // Transform data into a tree structure here
    return treeData;
};
