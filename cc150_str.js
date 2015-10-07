function isUniqueChars(str) {
	var charSet = {};
	for(var i = 0; i < str.length; i++) {
		if(charSet[str.charAt(i)]) return false;
		charSet[str.charAt(i)] = true; 
	}
	return true;
}


function isAnagram(str1, str2) {
	if(str1.length !== str2.length) return false;
	return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function isAnagramFast(str1, str2) {
	var charSet = {};

	for(var i = 0; i < str1.length; i++) {
		if(charSet[str1[i]]) {
			charSet[str1[i]]++;
		}
		else {
			charSet[str1[i]] = 1;
		}
	}

	for(var j = 0; j < str2.length; j++) {
		if(!charSet[str2[j]] || --charSet[str2[j]] < 0) {
			return false;
		}
	}

	return true;
}

// a bcdefg  a%20b%20cdefg
//     bcdefg
function strReplace(str) {
	var charArr = str.split(""),
		delimiter = " ",
		counter = 0,
		newLen = 0;

	for(var i = 0; i < charArr.length; i++) {
		if(charArr[i] === delimiter) {
			counter ++;
		}
	}

	newLen = charArr.length + counter * 2;
	for(var j = charArr.length - 1; j >= 0; j--) {
		if(charArr[j] === delimiter) {
			charArr[newLen - 1] = "0";
			charArr[newLen - 2] = "2";
			charArr[newLen - 3] = "%";
			newLen -= 3;
		}
		else {
			charArr[newLen - 1] = charArr[j]
			newLen --;
		}
	}

	return charArr.join("");

}
//aaaabbbccdef
function compress(str) {
	var result = [],
		counter = 1;

	result.push(str[0]);

	for (var i = 1; i < str.length; i++) {
		if(str[i] === str[i - 1]) {
			counter++;
		}
		else {
			result.push(counter);
			result.push(str[i]);
			counter = 1;
		}
	}
	result.push(counter);
	return result.join("");
}

//reverse matrix


