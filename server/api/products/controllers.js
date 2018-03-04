import Products from './models';

export const products = {
  async get (req, res) {
    try {
      const category = req.params.tag;
      if (category === 'recommends') {
        res.json({
          lists: recommends
        });
      }
    } catch (error) {
      console.log(error);
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
