const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017').then(() => console.log('DB CONNECTED')).catch((err) => console.log(err));

app.use('/api', userRoutes);

app.all('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found!'
    })
});

app.listen(3001, () => {
    console.log('Listen on port 3001');
});