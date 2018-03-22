import Products from './models';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs';
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
      const { name, desc, category, specs, picList } = req.body;
      let id = await getId('product_id');
      const monthsales = Math.ceil(Math.random() * 1000);
      const newProduct = {
        id: id,
        name: name,
        desc: desc,
        category: category,
        pic_list: picList,
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
  },

  async postImg (req, res) {
    try {
      const picUrl = await getPicUrl(req);
      res.status(200).json({
        status: 200,
        message: '上传成功',
        picUrl
      });
    } catch (error) {
      console.log('上传图片失败', error);
      res.status(1).json({
        message: '上传图片失败'
      });
    }
  }
};

async function getPicUrl (req) {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './server/public/imgs/';
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      const id = await getId('pic_id');
      const picName = (new Date().getTime() + Math.ceil(Math.random() * 10000)).toString(16) + id;
      const fullName = picName + path.extname(files.file.name);
      const newPath = './server/public/imgs/' + fullName;
      try {
        await fs.rename(files.file.path, newPath);
        // gm(newPath)
        // .resize(200, 200, '!')
        // .write(newPath, async (err) => {
        //   if (err) {
        //     console.log('裁剪图片失败');
        //     reject(err);
        //   }
        //   resolve(fullName);
        // });
        resolve(fullName);
      } catch (error) {
        console.log('保存图片失败', error);
        fs.unlink(files.file.path);
        reject(error);
      }
    });
  });
}

export async function getProductsAllCounts (req, res) {
  try {
    const counts = await Products.count();
    res.status(200).json({
      counts,
      message: '获取商品列表数量成功'
    });
  } catch (error) {
    res.status(1).json({
      message: '获取商品列表数量失败'
    });
  }
}

export async function getProductsList (req, res) {
  const { offset = 0, limit = 20 } = req.query;
  let products = [];
  let isEnd = false;
  try {
    if (req.query.category) {
      const category = decodeURIComponent(req.query.category);
      products = await Products.find({ category: category }).sort({id: -1}).limit(Number(limit)).skip(Number(offset));
    } else {
      products = await Products.find({}).sort({id: -1}).limit(Number(limit)).skip(Number(offset));
    }
    if (products.length < 1) {
      isEnd = true;
    }
    res.status(200).json({
      products,
      isEnd,
      message: '获取用户列表成功'
    });
  } catch (error) {
    res.status(1).json({
      message: '获取用户列表失败'
    });
  }
};

var recommends = [
  {
    id: 1,
    picUrl: 'http://p4zxobaq9.bkt.clouddn.com/mac.jpg',
    desc: 'Apple/苹果 21.5 英寸 iMac 2.3GHz 处理器 1TB 存储容量'
  }
];
