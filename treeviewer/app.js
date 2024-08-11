const express = require('express');
const bodyParser = require('body-parser');
const excelRoutes = require('./routes/excelRoutes');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(excelRoutes);  // Use the routes defined in excelRoutes.js

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
