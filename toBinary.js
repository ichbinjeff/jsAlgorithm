function toBinary(num) {
	var rem = 0;
	var remStack = new Stack();
	var binaryString = "";
	// 9 / 2
	while(num > 0) {
		rem = Math.floor(num % 2);
		remStack.push(rem);
		num = Math.floor(num / 2);
	}

	while(!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}

// 100100
// 2^5 + 2^2
function toDex(binary) {
	return parseInt(binary, 2);  
}

function toBase(num, base) {
	var rem, 
		remStack = new Stack(), 
		output = "";

	while(num > 0) {
		rem = Math.floor(num % base);
		remStack.push(rem);
		num = Math.floor(num / base);
	}

	while(!remStack.isEmpty()) {
		output += remStack.pop().toString();
	}

	return output;
}