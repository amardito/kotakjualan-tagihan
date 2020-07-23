const express = require ('express');
const app = express();
const bp = require ('body-parser');
const mongoose = require('mongoose');
const tagihanRoutes = require('./API/routes/tagihan')

app.use(bp.json());
mongoose.connect('mongodb://localhost/tagihan', { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/tagihan', tagihanRoutes);

module.exports = app;