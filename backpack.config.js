const path = require('path')

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = path.resolve(__dirname, 'server', 'app.js');
    config.output.path = path.resolve(__dirname, 'server', 'dist');
    return config
  }
}