// app.js

const allowedOrigins = [
  'http://localhost:3000',
  'https://shop-morningstar.netlify.app',
];

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) =>
      !origin || allowedOrigins.includes(origin)
        ? callback(null, true)
        : callback(new Error('CORS policy does not allow this origin!')),
  })
);

// Routes
const productRouter = require('./routes/productRoutes');

app.use('/api/v1/products', productRouter);

module.exports = app;
