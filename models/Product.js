const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  totalQuantity: { type: Number, default: 0 },
  sizes: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, default: 0 },
    },
  ],
  colors: [String],
  image: {},
});

module.exports = mongoose.model('Product', ProductSchema);
