const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'app.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('File not found');
        }
    });
});

app.listen(3000, () => {
    console.log('The server is started on http://localhost:3000');
});
