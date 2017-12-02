var util = require("util");
//require events模块，包含EventEmitter方法
var events = require("events");

//创建一个类
function MyEvent() {
	events.EventEmitter.call(this);
}

//利用util模块使MyEvent继承EventEmitter
util.inherits(MyEvent, events.EventEmitter);

//原型继承方法
MyEvent.prototype.write = function(info) {
	//emit触发绑定的data事件
	this.emit("data", info);
};

//实例化MyEvent类
var myEvent = new MyEvent();

//on 注册绑定事件，并命名事件名为data
myEvent.on("data", function(info) {
	console.log(info);
});

//调用方法
myEvent.write("It works!"); // Get info: "It works!"