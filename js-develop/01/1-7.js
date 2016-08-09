var apartment = {
	isLocked: false,
	lock: function() {
		var that = this;

		this.isLocked = true;

		function doSomething() {
			console.log(this === apartment);
			console.log(this === global);
			console.log(that === apartment);

			that.isLocked = false;
		}

		doSomething();
	}
};

apartment.lock();

console.log(apartment.isLocked);