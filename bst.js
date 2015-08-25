var Node = function(key) {
	this.key = key;
	this.left = null;
	this.right = null;
};

function BinarySearchTree() {
	var root = null;
	
	this.height = function() {
		return treeHeight(root);
	};

	this.isBalanced = function() {
		return balanced(root);
	};

	this.insert = function(key) {
		var newnode = new Node(key);
		if(root == null) {
			root = newnode;
		}
		else {
			insertNode(root, newnode);
		}

	};

	this.search = function(key) {
		return searchNode(root, key);
	};

	this.inOrderTraverse = function(callback) {
		if(root != null) {
			inOrderTraverseNode(root, callback);
		}

	};
	
	this.preOrderTraverse = function(callback) {
		if(root != null) {
			preOrderTraverseNode(root, callback);
		}
	};
	
	this.postOrderTraverse = function(callback) {
		if(root != null) {
			postOrderTraverseNode(root, callback);
		}
	};

	this.levelOrderTraverse = function(callback) {
		var queue = [];
		queue.push(root);
		while(queue.length) {
			var node = queue.shift();
			callback(node.key);
			if(node.left) {
				queue.push(node.left);
			}
			if(node.right) {
				queue.push(node.right);
			}
		}
		
	}

	this.min = function() {
		return minNode(root);
	};

	this.max = function() {
		return maxNode(root);
	};

	this.remove = function(key) {
		root = removeNode(root, key);
	};

	// private func
	var removeNode = function(node, key) {
		if(node.key > key) {
			node.left = removeNode(node.left, key);
			return node;
		}
		if(node.key < key) {
			node.right = removeNode(node.right, key);
			return node;
		}
		else {
			// case 1: no left child and no right child
			if(node.left === null && node.right === null) {
				node = null;
				return node;
			}

			// case two, only has one child
			if(node.left == null) {
				node = node.right;
				return node;
			}
			
			if (node.right == null) {
				node = node.left;
				return node;
			}


			aux = findMinNode(node.right);
		    node.key = aux.key;
		    node.right = removeNode(node.right, aux.key);
		    return node;
		}
	};

	var treeHeight = function(node) {
		if(node == null) {
			return 0;
		}
		else {
			return Math.max(treeHeight(node.left), treeHeight(node.right)) + 1;
		}
	};


	var insertNode = function(node, newnode) {
		if(node.key > newnode.key) {
			if(node.left != null) {
				insertNode(node.left, newnode)
			}
			else{
				node.left = newnode;
			}
		}

		if(node.key < newnode.key) {
			if(node.right != null) {
				insertNode(node.right, newnode);
			}
			else {
				node.right = newnode;
			}
		}
	};

	var inOrderTraverseNode = function(node, callback) {
		if(node != null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	};

	var preOrderTraverseNode = function(node, callback) {
		if(node != null) {
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	};

	var postOrderTraverseNode = function(node, callback) {
		if(node != null) {
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	};

	var findMinNode = function(node) {
		if(node){
			while(node && node.left != null) {
				node = node.left;
			}
			return node;
		}
		return null;
	};

	var minNode = function(node) {
		if(node) {
			while(node && node.left !== null) {
				node = node.left;
			}
			return node.key;
		}
		return null;
	};

	var maxNode = function(node) {
		if(node) {
			while(node && node.right !== null) {
				node = node.right;
			}
			return node.key;
		}
		return null;
	};

	var searchNode = function(node, key) {
		if(node === null) return false;
		if(node.key > key) {
			return searchNode(node.left, key);
		}
		if(node.key < key) {
			return searchNode(node.right, key);
		}
		else{
			return true;
		}
	};

	var balanced = function(node) {
		if(node == null) return true;
		if(Math.abs(treeHeight(node.left) - treeHeight(node.right)) > 1) return false;
		return true;
	}


}

