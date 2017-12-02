function Hello() {
	var name;

	this.setName = function(thyname) {
		name = thyname;
	};

	this.sayHello = function() {
		console.log('Hello ' + name);
	};
}

// exports.Hello = Hello; // 导出一个方法
module.exports = Hello; // 导出一个对象