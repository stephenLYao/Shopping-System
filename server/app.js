const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const chalk = require('chalk');
const config = require('./config/default');
const apiRoutes = require('./api/index');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(cookieParser);
app.use(session({
  name: config.session.name,
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: config.session.cookie,
  store: new MongoStore({
    url: config.mongodbUrl
  })
}));
// Import API Routes
app.use('/api', apiRoutes);
app.use(history);
app.listen(config.port, () => {
  console.log('Server is listening on port ' + config.port);
});
