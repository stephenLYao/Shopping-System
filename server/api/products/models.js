import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  id: Number,
  pic_url: String,
  desc: String,
  price: Number,
  tag: String
});

const Products = mongoose.model('Products', productsSchema);

export default Products;
