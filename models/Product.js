const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  totalQuantity: { type: Number, default: 0 },
  sizes: [
    {
      size: { type: String, required: true },
      quantity: { type: Number, default: 0 },
    },
  ],
  colors: [String],
  image: { type: String, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);
