import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  id: Number,
  pic_list: [String],
  name: String,
  desc: String,
  category: String,
  month_sales: Number,
  specs: [{
    spec_name: String,
    pack_fee: Number,
    price: Number,
    sold_out: false
  }],
  comments: [String]
});

const Products = mongoose.model('Products', productsSchema);

export default Products;
