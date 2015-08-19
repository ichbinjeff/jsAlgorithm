var binarySearch = function(arr, key, low, high) {
	if(low >= high) return -1;

	var mid = Math.floor((high + low) / 2);
	if(arr[mid] == key) {
		return mid;
	}
	
	if(arr[mid] < key) {
		return binarySearch(arr, key, mid + 1, high);
	}

	if(arr[mid] > key) {
		return binarySearch(arr, key, 0, mid);
	}
}