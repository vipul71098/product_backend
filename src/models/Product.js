const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    contentType: String
  },
  total_price: {
    type: Number,
  }
});

module.exports = Products = mongoose.model("product", ProductSchema);
