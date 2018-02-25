import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { randId } from '../../utils/index';
import User from './models';
import config from '../../config/default';

export const index = {
  async post (req, res) {
    try {
      let { username, password1, password2 } = req.body;
      if (password1 === password2) {
        let password = await bcrypt.hash(password1, 10);
        let newUser = new User({ username, password });
        let savedUser = await newUser.save();
        console.log('用户注册成功');
        res.status(200).json({
          message: `Thanks for signing up, ${savedUser.username}!`
        });
      } else {
        console.error('用户密码不匹配');
        res.status(400).json({
          message: '密码不匹配'
        });
      }
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
      let user = await User.findOne({ username });
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
