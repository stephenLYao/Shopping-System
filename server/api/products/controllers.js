import Products from './models';
import formidable from 'formidable';
import { getId } from '../../utils/ids';

export const products = {
  async get (req, res) {
    try {
      const category = req.params.category;
      if (category === 'recommends') {
        res.json({
          lists: recommends
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  async post (req, res) {
    // const form = new formidable.IncomingForm();
    try {
      const { name, desc, category, specs } = req.body;
      let id = await getId('product_id');
      const monthsales = Math.ceil(Math.random() * 1000);
      const newProduct = {
        id: id,
        name: name,
        desc: desc,
        category: category,
        month_sales: monthsales,
        specs: [],
        comments: []
      };
      let productsSpecs = [];
      if (specs.length > 0) {
        specs.forEach((item) => {
          productsSpecs.push({
            spec_name: item.specs,
            pack_fee: item.packFee,
            price: item.price
          });
        });
      }
      newProduct.specs = productsSpecs;
      try {
        const product = await Products.create(newProduct);
        await product.save();
        res.status(200).json({
          message: '添加商品成功'
        });
      } catch (error) {
        console.log('添加商品失败', error);
        res.status(400).json({
          message: '添加商品失败'
        });
      }
    } catch (err) {
      console.log('添加商品失败', err);
      res.status(400).json({
        message: '添加商品失败'
      });
    }
  }
};

var recommends = [
  {
    id: 1,
    picUrl: 'http://p4zxobaq9.bkt.clouddn.com/mac.jpg',
    desc: 'Apple/苹果 21.5 英寸 iMac 2.3GHz 处理器 1TB 存储容量',
    price: 8688,
    tag: 'appliances'
  },
  {
    id: 1,
    picUrl: 'http://p4zxobaq9.bkt.clouddn.com/mac.jpg',
    desc: 'Apple/苹果 21.5 英寸 iMac 2.3GHz 处理器 1TB 存储容量',
    price: 8688,
    tag: 'appliances'
  },
  {
    id: 1,
    picUrl: 'http://p4zxobaq9.bkt.clouddn.com/mac.jpg',
    desc: 'Apple/苹果 21.5 英寸 iMac 2.3GHz 处理器 1TB 存储容量',
    price: 8688,
    tag: 'appliances'
  },
  {
    id: 1,
    picUrl: 'http://p4zxobaq9.bkt.clouddn.com/mac.jpg',
    desc: 'Apple/苹果 21.5 英寸 iMac 2.3GHz 处理器 1TB 存储容量',
    price: 8688,
    tag: 'appliances'
  },
  {
    id: 1,
    picUrl: 'http://p4zxobaq9.bkt.clouddn.com/mac.jpg',
    desc: 'Apple/苹果 21.5 英寸 iMac 2.3GHz 处理器 1TB 存储容量',
    price: 8688,
    tag: 'appliances'
  },
  {
    id: 1,
    picUrl: 'http://p4zxobaq9.bkt.clouddn.com/mac.jpg',
    desc: 'Apple/苹果 21.5 英寸 iMac 2.3GHz 处理器 1TB 存储容量',
    price: 8688,
    tag: 'appliances'
  }
];
