const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ Connection Failed', err));

// Start server
const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`🤖 Server running on port ${port}`));
