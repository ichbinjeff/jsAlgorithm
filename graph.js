var Graph = function() {
	var vertices = [];
	var adjList = {};

	this.addVertex = function(v) {
		vertices.push(v);
		adjList[v] = [];
	};

	this.addEdge = function(v, w) {
		if(!adjList[v] || !adjList[w]) {
			return -1;
		}
		adjList[v].push(w);
		adjList[w].push(v);
	};

	this.toString = function() {
		for (var i = 0; i < vertices.length; i++) {
			var pivot = vertices[i];
			var list = adjList[pivot].join(" ");
			console.log(pivot + " -> " + list);
		}
	};

	this.BFS = function (v, callback) {
		var queue = [],
		    isReady = {},
		    d = {},
		    pred = {};

		queue.push(v);

		for (var i = 0; i < vertices.length; i++) {
			d[vertices[i]] = 0;
			pred[vertices[i]] = null;
		}

		while(queue.length) {
			var u = queue.shift();
			// fetch all the neighbors, add all neighbors to the queue
			isReady[u] = 1;
			var list = adjList[u];
			for (var i = 0; i < list.length; i++) {
				if(!isReady[list[i]]) {
					isReady[list[i]] = 1;
					d[list[i]] = d[u] + 1;
					pred[list[i]] = u;
					queue.push(list[i]);
				}
			}
			// visit the vertex
			isReady[u] = 2;
		}
		return {
				distance: d,
				prev: pred
		}
	}
}

// client code
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (var i = 0; i < myVertices.length; i++) {
	graph.addVertex(myVertices[i]);
}

var visit = function(value) {
	console.log('visited vertext' + value);
}


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.toString();
var distance = graph.BFS(myVertices[0], visit);

