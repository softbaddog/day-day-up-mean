// config/config.default.js
exports.keys = "12345678"
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};;
// 添加 news 的配置项
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i,
    ],
};