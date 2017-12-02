exports.reply = function*(next) {
  var message = this.weixin;

  if (message.MsgType === 'event') {
    if (message.Event === 'subscribe') {
      if (message.EventKey) {
        console.log('扫二维码进来：' + message.EventKey + ' ' + message.ticket);
      }

      this.body = '哈哈，你订阅了这个号\r\n' + ' 消息ID: ' + message.MsgId;
    } else if (message.Event === 'unsubscribe') {
      console.log('无情驱赶');
      this.body = '';
    } else if (message.Event === 'LOCATION') {
      this.body = '您上报的位置是： ' + message.Latitude + '/' + message.Longitude + '-' + message.Precision;
    } else if (message.Event === 'CLICK') {
      this.body = '您点击了菜单：' + message.EventKey;
    } else if (message.Event === 'SCAN') {
      console.log('关注后扫二维码' + message.EventKey + ' ' + message.Ticket);
      this.body = '看你扫了一下哦';
    } else if (message.Event === 'VIEW') {
      this.body = '您点击了菜单中的链接:' + message.EventKey;
    }
  } else if (message.MsgType === 'text') {
    var content = message.Content;
    var reply = '你说的 ' + message.Content + ' 太复杂了';

    if (content === '1') {
      reply = '我爱我老婆!';
    } else if (content === '2') {
      reply = '我还是很爱我老婆！';
    } else if (content === '3') {
      reply = '我永远爱我老婆！';
    } else if (content === '4') {
      reply = [{
        title: '技术改变世界',
        description: '范例',
        picUrl: 'http://img15.3lian.com/2015/f1/119/d/51.jpg',
        url: 'http://nodejs.org/'
      }];
    }

    this.body = reply;
  }

  yield next;
};