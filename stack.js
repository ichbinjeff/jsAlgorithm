var Stack = function() {
	this.stack = [];
}

Stack.prototype = {
	push: function(item) {
		this.stack.push(item);
	},
	pop: function(item) {
		return this.stack.pop();
	},
	peek: function(item) {
		return this.stack[this.stack.length - 1];
	},
	size: function() {
		return this.stack.length;
	},
	isEmpty: function() {
		return this.stack.length === 0;
	},
	clear: function() {
		this.stack = [];
	},
	print: function() {
		console.log(this.stack.toString());
	}
}