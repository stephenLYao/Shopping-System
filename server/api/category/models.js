import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: String,
  tag: String
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
