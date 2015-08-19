var bubbleSort = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr.length - i - 1; j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr, j, j + 1);
			}
		}
	}
};

var swap = function(arr, item1, item2) {
	var temp = arr[item1];
	arr[item1] = arr[item2];
	arr[item2] = temp;
};

var insertionSort = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		var temp = arr[i],
			j = i - 1;
		while(j >= 0 && temp < arr[j]) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = temp;
	}
};


var mergeSort = function(arr) {
	var length = arr.length;
	if(length === 1) return arr;

	var mid = Math.floor(length / 2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, length);

	return merge(mergeSort(left), mergeSort(right));
};

//[2,4] [3,5]
var merge = function(left, right) {
	var leftIndex = 0,
		rightIndex = 0,
		result = [];

	while(leftIndex < left.length && rightIndex < right.length) {
		if(left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex++]);
		}
		else {
			result.push(right[rightIndex++]);
		}
	}

	while(leftIndex < left.length) {
		result.push(left[leftIndex++]);
	}

	while(rightIndex < right.length) {
		result.push(right[rightIndex++]);
	}

	return result;
}

var quicksort = function(arr, left, right) {
	var index; 
	if (arr.length > 1) {
		index = partition(arr, left, right);
		if (left < index - 1) {
			quicksort(arr, left, index - 1);
		}

		if (index < right) {
			quicksort(arr, index, right);
		}
	}
}

var partition = function(arr, left, right) {
	var pivot = arr[Math.floor((right + left) / 2)];
	var i = left;
	var j = right;

	while(i <= j) {
		while(arr[i] < pivot) {
			i++
		}

		while(arr[j] > pivot) {
			j--;
		}

		if(i <= j) {
			swapQuick(arr, i, j);
			i++;
			j--;
		}
	}

	return i;
};

var swapQuick = function(arr, lI, rI) {
	var temp = arr[lI];
	arr[lI] = arr[rI];
	arr[rI] = temp;
};

var sort = {
	bubbleSort: bubbleSort,
	insertionSort: insertionSort,
	quicksort: quicksort
};


var selectionSort = function(arr) {
	var length = arr.length;
	var min, minIndex;

	for(var i = 0; i < length; i++) {
		min = arr[i];
		minIndex = i;
		for(var j = i; j < length; j++) {
			if(arr[j] < min) {
				min = arr[j];
				minIndex = j;
			}
		}
		var temp = arr[i];
		arr[i] = min;
		arr[minIndex] = temp;
	}
	return arr;
}
