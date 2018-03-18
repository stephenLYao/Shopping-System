import mongoose from 'mongoose';

const types = ['user_id', 'product_id'];
const idsSchema = new mongoose.Schema({
  // order_id: Number,
  // address_id: Number,
  // cart_id: Number,
  // img_id: Number,
  // category_id: Number,
  // item_id: Number,
  // sku_id: Number,
  // admin_id: Number,
  user_id: Number,
  product_id: Number
});

const Ids = mongoose.model('Ids', idsSchema);
Ids.findOne((err, data) => {
  if (err) throw Error(err);
  if (!data) {
    const newIds = new Ids({
      user_id: 0,
      product_id: 0
    });
    newIds.save();
  }
});
export async function getId (type) {
  if (!types.includes(type)) {
    console.log('类型错误');
    return;
  }
  try {
    const id = await Ids.findOne();
    id[type]++;
    await id.save();
    return id[type];
  } catch (error) {
    console.log('获取Id失败：' + error);
  }
}
export default Ids;
