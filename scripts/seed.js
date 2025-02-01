require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('../models/Product');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB Connection Failed:', err));

// Read json file
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/products.json`)
);

// Seed database
const seedDatabase = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log('✅ Database Seeded Successfully!');

    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Seeding Failed:', err);
    mongoose.connection.close();
  }
};

seedDatabase();
