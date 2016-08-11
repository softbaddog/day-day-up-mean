function FooObj(bar) {
	//在构造函数中初始化属性
	this.bar = bar;
	this.arr = [1, 2, 3];
}
//使用原型定义成员函数
FooObj.prototype.func = function() {
	console.log(this.arr);
};
var obj1 = new FooObj('obj1');
var obj2 = new FooObj('obj2');
obj1.arr.push(4);
obj1.func(); // [1, 2, 3, 4]
obj2.func(); // [1, 2, 3]