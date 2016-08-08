var myLibrary = {
	myName: "Dennis"
};

function doSomething() {
	var innerVariable = 123;

	myLibrary.myName = 'Hello';

	function doSomethingElse() {
		innerVariable = 1234;
	}
	doSomethingElse();

	console.log(innerVariable);
}

doSomething();

console.log(myLibrary.myName);

// console.log(innerVariable);