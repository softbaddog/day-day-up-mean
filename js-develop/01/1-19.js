var Class = (function() {
	function create(classDefinition, parentPrototype) {
		var _NewClass = function() {
			if (this.initialize && typeof this.initialize === 'function') {
				this.initialize.apply(this, arguments);
			}
		},
		_name;

		if (parentPrototype) {
			_NewClass.prototype = new parentPrototype.constructor();

			for (_name in parentPrototype) {
				if (parentPrototype.hasOwnProperty(_name)) {
					_NewClass.prototype[_name] = parentPrototype[_name];
				}
			}
		}
	}
})