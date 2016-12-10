function findPrimes(num) {
	for(var i = 2; i < num; i++) {
		if(!(num % i)) {
			return false
		}
	}
	return true;
}


function sumPrimes(num) {
	var sum = 0;
	for(var i = 2; i <= num; i++) {
		if(findPrimes(i)) {
			sum += i;
		}
	}
	return sum;
}

sumPrimes(7);