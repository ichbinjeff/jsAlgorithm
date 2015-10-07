var isPrime = function(n) {
	var divisor = 2;
	if(n <= 2) return true;

	while(n > divisor) {
		if(n % divisor === 0) {
			return true;
		}
	}
	return false;
};

var primeFactors = function(n) {
	var divisor = 2,
		factors = [];

	while(n > divisor) {
		if(n % divisor === 0 && isPrime(divisor)) {
			factors.push(divisor);
		}

		divisor++;
	}
	return factors;
};

var primeFactorsFast = function(n) {
	var factors = [], 
      divisor = 2;
  
	  while(n > 2){
	    if(n % divisor == 0){
	       factors.push(divisor); 
	       while(n % divisor === 0) {
	       		n /= divisor;
	       }
	    }
	   
	    divisor++;
	  }
  	return factors;
};

var fibonacci = function(n) {
	if(n === 1) return 1;
	if(n === 2) return 1;
	if(n > 2) {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
};

var fibonacciCache = function(n) {
	var fibo = {};
	fibo[1] = 1;
	fibo[2] = 1;

	for(var i = 3; i <= n; i++) {
		fibo[i] = fibo[i-1] + fibo[i-2];
	}

	return fibo[n];
};

var factorial = function(n) {
	if(n == 1) return 1;
	if(n >= 2) {
		return n * factorial(n - 1)
	}
}

var factorialCache = function(n) {
	var cache = {};
	cache[1] = 1;

	for(var i = 2; i <= n; i++) {
		cache[i] = i * cache[i - 1];
	}
	return cache[n];
}

var findDiff = function() {
	n = 1;
	while(n < 20) {
		if(fibonacci(n) !== fibonacciCache(n)) {
			console.log(n);
		}
		n++;
	}
};

function greatestCommonDivisor(m, n) {
	var divisor = 2;
	var greatest = 2;

	while(divisor <=m && divisor <= n) {
		if(m % divisor === 0 && n % divisor === 0) {
			if(greatest < divisor) greatest = divisor;
		}

		divisor++;
	}
	return greatest;
}

function removeDuplicate(arr) {
	var result = [];
	var cache = {};

	arr.forEach(function(item) {
		if(!cache[item]) {
			result.push(item);
		}
		cache[item] = 1;
	});

	return result;
}

function mergeSort(arr) {
	if(arr.length == 1) {
		return arr;
	}
	var mid = Math.floor(arr.length / 2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, arr.length);

	return mergeTwoSortedArr(mergeSort(left), mergeSort(right));
}

function mergeTwoSortedArr(left, right) {
	var il = 0,
		ir = 0,
		result = [];

	while(il < left.length && ir < right.length) {
		if(left[il] < right[ir]) {
			result.push(left[il++]);
		}
		else {
			result.push(right[ir++]);
		}
	}

	while(il < left.length) {
		result.push(left[il++]);
	}

	while(ir < right.length) {
		result.push(right[ir++]);
	}

	return result;
}

function stringReverse(str) {
	var charArr = str.split("");
	var backWardIndex = charArr.length - 1;
	var forwardIndex = 0;
	
	while(forwardIndex < backWardIndex) {
			var temp = charArr[backWardIndex];
			charArr[backWardIndex] = charArr[forwardIndex];
			charArr[forwardIndex] = temp;

			forwardIndex++;
			backWardIndex--;
	}

	return charArr.join("");
}

// //aabbccdeef
// function compress(str) {
// 	var charArr = str.split("");
// 	var result = [];
// 	var count = 1;

// 	for(var i = 0; i < charArr.length - 1; i++) {
// 		if(charArr[i] === charArr[i + 1]) {
// 			count++;
// 		}
// 		else{
// 			result.push(charArr[i])
// 			if(count !== 1) {
// 				result.push(count);
// 			}
// 			count = 1;
// 		}
// 	}
// 	result.push(charArr[charArr.length - 1]);
// 	if(count !== 1) result.push(count);

// 	return result.join("");
// }


function findFirstNonRepeat(str) {
	var str = str.replace(/\s/g, "");
	var length = str.length;
	var dictionary = {};

	for(var i = 0; i < length; i++) {
		if(dictionary[str[i]]) {
			dictionary[str[i]]++;
		}
		else {
			dictionary[str[i]] = 1;
		}
	}

	for(var i = 0; i < length; i++) {
		if(dictionary[str[i]] === 1) return str[i];
	}

	return false;
}

//abba
function checkPalindrome(str) {
	 //return str === str.split("").reverse().join("");
	 var length = str.length;
	 for(var i = 0; i < length; i++) {
	 	if(str[i] !== str[length - 1 - i]) return false;
	 }
	 return true;
}

function random(min, max) {
	return Math.random() * (max - min) + min;
}

function missingNumber(arr) {
	var length = arr.length + 1;
	var expectedSum = length * (1 + length) / 2;
	var sum = 0;

	arr.forEach(function(item) {
		sum += item;
	});

	return expectedSum - sum;
}

// function indexOf(str, substr) {
// 	var strLen = str.length,
// 		substrLen = substr.length,
// 		index = -1,
// 		j = 0;

// 	for(var i = 0; i < strLen; i++) {
// 		if(str[i] === substr[j]) {
// 			if(j === 0) {
// 				index = i;
// 			}
// 			j++;
// 		}
// 		else {
// 			if(j === substrLen) {
// 				return index;
// 			}
// 			else{
// 				j = 0;
// 			}
// 		}
// 	}

// 	return index;

// }
// abcde  bc  hi
function indexOf(str, match) {
	var len = str.length;
	var index = 0;
	for(var i = 0; i < len; i++) {
		if(str[i] == match[index]) {
			// in this case, we found the match
			if(index + 1 === match.length) {
				return i - index;
			}
			else {
				index ++;
			}
		}
		else {
			index = 0;
		}
	}
	return -1;
}

function replaceStr(str, match, replace) {
	var index = str.indexOf(match),
	    len = str.length,
		part1, part2;
	
	if(index === -1) return -1;

	part1 = str.substring(0, index);
	part2 = str.substring(index + match.length, len);

	return part1 + replace + part2;
}

//abcd
//b
//ef
//aefcd


//space complexity o(1), time complexity o(n*m)
function replaceStr2(str, match, replace) {
	var index = str.indexOf(match);
	var len = str.length;
	var charArr = str.split("");
	var newLen = 0;

	if(index !== -1) {
		newLen = len + replace.length - match.length - 1;

		for(var i = len - 1; i >= 0; i--) {
			if(i === index + match.length - 1) {
				for(var j = replace.length - 1; j >=0; j--) {
					charArr[newLen] = replace[j];
					newLen --;
				}
				i -= match.length - 1;
				
			}
			else {
				charArr[newLen] = charArr[i];
				newLen --;
			}
		}
		return charArr.join("");
		
	}
	return -1;
}

//abcd dcba  abcde  edcba
function reverse(str) {
	var charArr = str.split(""),
		len = str.length,
		temp = "",
		cursor = 0;

	for(var i = len - 1; i >= 0; i--) {
		if(cursor < i) {
			temp = charArr[i];
			charArr[i] = charArr[cursor]
			charArr[cursor] = temp; 
			cursor ++;
		}
	}

	return charArr.join("");
}

var printme = (function() {
	var _item = [];
	var printme = function(val) {
		if (!val) {
			console.log(_item.join(" "));
			_item = [];
			return;
		}
		_item.push(val);
		return printme;
	}

	return printme;
})()

var matrix = [
  [1 ,2 ,3 ,6 ,5],
  [16,0,23,22,6],
  [15,17,0,21,7],
  [14,0,19,20,10],
  [13,14,11,0,9]
];

var row = [];
var col = [];
function clearMatrix(matrix) {
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] == 0) {
				row[i] = true;
				col[j] = true;
			}
		}
	}

	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (row[i] || col[j]) {
				matrix[i][j] = 0;
			}
		}
	}

	return matrix;
}

