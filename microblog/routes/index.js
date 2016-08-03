var express = require('express');
var router = express.Router();
var util = require('util');
var User = require('../models/user');
var crypto = require('crypto');
var Post = require('../models/post');

router.get('/', function(req, res, next) {
	Post.get(null, function(err, posts) {
		if (err) {
			posts = [];
		}
		console.log(posts);
		res.render('index', {
			title: '首页',
			posts: posts,
		});
	});
});

router.post('/post', function(req, res, next) {
	var currentUser = req.session.user;
	var post = new Post(currentUser.name, req.body.post);
	post.save(function(err) {
		if (err) {
			req.flash('error', err);
			return res.redirect('/');
		}
		req.flash('success', '发表成功');
		res.redirect('/u/' + currentUser.name);
	});
});

router.get('/reg', function(req, res, next) {
	res.render('reg', {
		title: '用户注册'
	});
});

router.post('/reg', function(req, res, next) {
	//检验用户两次输入的口令是否一致
	if (req.body['password-repeat'] != req.body['password']) {
		req.flash('error', '两次输入的口令不一致');
		return res.redirect('/reg');
	}
	//生成口令的散列值
	var md5 = crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');
	var newUser = new User({
		name: req.body.username,
		password: password,
	});
	//检查用户名是否已经存在
	User.get(newUser.name, function(err, user) {
		if (user)
			err = 'Username already exists.';
		if (err) {
			req.flash('error', err);
			return res.redirect('/reg');
		}
		//如果不存在则新增用户
		newUser.save(function(err) {
			if (err) {
				req.flash('error', err);
				return res.redirect('/reg');
			}
			req.session.user = newUser;
			req.flash('success', '注册成功');
			res.redirect('/');
		});
	});
});

router.get('/login', function(req, res, next) {
	res.render('login', {
		title: '用户登入'
	});
});

router.post('/login', function(req, res, next) {
	//生成口令的散列值
	var md5 = crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');
	User.get(req.body.username, function(err, user) {
		if (!user) {
			req.flash('error', '用户不存在');
			return res.redirect('/login');
		}
		if (user.password != password) {
			req.flash('error', '用户口令错误');
			return res.redirect('/login');
		}
		req.session.user = user;
		req.flash('success', '登入成功');
		res.redirect('/');
	});
});

router.get('/logout', function(req, res, next) {
	req.session.user = null;
	req.flash('success', '登出成功');
	res.redirect('/');
});

router.get('/u/:user', function(req, res) {
	User.get(req.params.user, function(err, user) {
		if (!user) {
			req.flash('error', '用户不存在');
			return res.redirect('/');
		}
		Post.get(user.name, function(err, posts) {
			if (err) {
				req.flash('error', err);
				return res.redirect('/');
			}
			res.render('user', {
				title: user.name,
				posts: posts,
			});
		});
	});
});

router.get('/list', function(req, res) {
	res.render('list', {
		title: 'List',
		items: [1991, 'byvoid', 'express', 'Node.js']
	});
});

router.get('/helper', function(req, res) {
	res.locals.headers = req.headers;
	res.locals.inspect = function(obj) {
		return util.inspect(obj, true);
	};
	res.render('helper', {
		title: 'Helpers'
	});
});


module.exports = router;