// app.js

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'https://shop-morningstar.netlify.app' }));

// Routes
const productRouter = require('./routes/productRoutes');

app.use('/api/v1/products', productRouter);

module.exports = app;
