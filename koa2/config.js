var path = require('path');
var util = require('./libs/util');
var wechat_file = path.join(__dirname, './config/wechat.txt');

var config = {
  wechat: {
    appID: 'wx4608a460e4db7bc8',
    appSecret: 'b237e7d347639c12a30170d8da8feb32',
    token: '1234567890',
    getAccessToken: function() {
      return util.readFileAsync(wechat_file);
    },
    saveAccessToken: function(data) {
      data = JSON.stringify(data);
      return util.writeFileAsync(wechat_file, data);
    }
  }
};

module.exports = config;