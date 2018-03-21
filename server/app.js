import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { urlencoded, json } from 'body-parser';
import history from 'connect-history-api-fallback';
import mongoose from 'mongoose';
import chalk from 'chalk';
import config from './config/default';
import apiRoutes from './api/index';

// connect mongodb
mongoose.connect(config.mongodbUrl);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.once('open', () => {
  console.log(chalk.green('数据库连接成功!'));
});

db.on('error', (err) => {
  console.log(chalk.red('数据连接出错: ' + err));
  mongoose.disconnect();
});

db.on('close', () => {
  console.log(chalk.red('数据库断开, 重新连接数据库'));
  mongoose.connect(config.mongodbUrl, {server: { auto_reconnect: true }});
});

const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true); // 可以带cookies
  res.header('X-Powered-By', '3.2.1');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  };
});

app.use('/static', express.static(path.join(__dirname, '/public')));
app.use(json());
app.use(urlencoded({extended: false, limit: '50mb'}));
app.use(cookieParser());

// Import API Routes
app.use('/api', apiRoutes);
app.use(history);
app.listen(config.port, () => {
  console.log('Server is listening on port ' + config.port);
});
