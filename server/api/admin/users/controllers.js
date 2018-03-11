import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dtime from 'time-formater';
import { randId } from '../../../utils/index';
import Admin from './models';
import User from '../../users/models';
// import config from '../../config/default';

export const register = {
  async post (req, res) {
    try {
      let { username, password } = req.body;
      let createAt = dtime().format('YYYY-MM-DD HH:mm');
      let newPassword = await bcrypt.hash(password, 10);
      let newUser = new Admin({ username, newPassword, createAt });
      let savedUser = await newUser.save();
      console.log('用户注册成功');
      res.status(200).json({
        message: `Thanks for signing up, ${savedUser.username}!`
      });
    } catch (error) {
      console.error('用户注册失败');
      res.status(400).json({
        message: '注册失败'
      });
    }
  }
};

export const logIn = {
  async post (req, res) {
    try {
      let { username, password } = req.body;
      let user = await Admin.findOne({ username });
      console.log(user);
      if (user) {
        let passwordHash = user.password;
        let matched = await bcrypt.compare(password, passwordHash);
        if (matched) {
          res.status(200).json({
            message: '登录成功',
            user
          });
        } else {
          res.status(401).json({
            message: '用户名或者密码不正确'
          });
        }
      } else {
        res.status(401).json({
          message: '用户名不存在'
        });
      }
    } catch (error) {
      console.error('用户登录失败');
      res.status(400).json({
        message: '登录失败'
      });
    }
  }
};

export const logOut = {
  async post (req, res) {
    try {
      res.status(200).json({
        message: 'Sign out successful. Good bye! :)'
      });
    } catch (error) {
      console.error(error);
    }
  }
};

export async function getUserCounts (req, res) {
  try {
    const count = await User.count();
    res.status(200).json({
      count
    });
  } catch (error) {
    res.status(503).json({
      message: '获取用户数量失败'
    });
  }
}

export async function getUserLists (req, res) {
  const { offset = 0, limit = 20 } = req.query;
  try {
    const users = await User.find({}).sort({user_id: -1}).limit(Number(limit)).skip(Number(offset));
    res.status(200).json({
      users
    });
  } catch (error) {
    res.status(503).json({
      message: '获取用户列表失败'
    });
  }
}
