var express = require('express');
var router = express.Router();
var util = require('util');

var users = {
	'byvoid': {
		name: 'Carbo',
		website: 'http://www.byvoid.com'
	}
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.all('/:username', function(req, res, next) {
	if (users[req.params.username]) {
		next();
	} else {
		next(new Error(req.params.username + ' does not exist.'));
	}
});

router.get('/:username', function(req, res) {
	res.send(JSON.stringify(users[req.params.username]));
});
router.put('/:username', function(req, res) {
	res.send('Done');
});

module.exports = router;
