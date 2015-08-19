var Queue = function() {
	this.item = [];
};

Queue.prototype = function() {
	enqueue: function(item) {
		this.item.push(item);
	},
	dequeue: function() {
		return this.item.unshift();
	},
	size: function() {
		return this.item.length;
	}.
	isEmpty: function() {
		return this.item.length === 0;
	},
	front: function() {
		return this.item[0];
	},
	clear: function() {
		this.item = [];
	},
	print: function() {
		console.log(this.item.toString());
	}
};