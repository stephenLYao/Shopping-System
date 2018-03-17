import Category from './models';

export const category = {
  async get (req, res) {
    try {
      const categories = await Category.find({}, (err, data) => {
        if (!err) {
          if (data && data.length < 1) {
            for (let i = 0; i < INITCATEGORY.length; i++) {
              Category.create(INITCATEGORY[i]);
            }
          }
        }
      });
      res.status(200).json({
        categories
      });
    } catch (error) {
      res.status(1).json({
        message: '获取种类失败'
      });
    }
  },
  async post (req, res) {
    try {
      const { name, tag } = req;
      const isExist = await Category.findOne({ name });
      if (!isExist) {
        const category = new Category({ name, tag });
        await category.save();
        res.status(200).json({
          message: '添加种类成功'
        });
      } else {
        res.status(1).json({
          message: '种类名已存在'
        });
      }
    } catch (error) {
      res.status(1).json({
        message: '添加种类失败'
      });
    }
  }
};

const INITCATEGORY = [
  {
    name: '服装',
    tag: 'clothes'
  },
  {
    name: '鞋靴',
    tag: 'shoes'
  },
  {
    name: '家电',
    tag: 'appliances'
  },
  {
    name: '运动',
    tag: 'sports'
  },
  {
    name: '美食',
    tag: 'foods'
  },
  {
    name: '家具',
    tag: 'furnitures'
  },
  {
    name: '汽车',
    tag: 'cars'
  }
];
