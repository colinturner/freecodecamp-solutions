function sumFibs(num) {
	z = [1, 1];                //set up the beginning of the Fibonnaci sequence
	
	for (i=2; i<=num; i++) {         //establish the rule for generating more numbers in the Fib sequence. Add all new numbers to the z-array containing the sequence
		z.push(z[i - 1 ] + z[i - 2]);
	}
	
	x = [];  //create new empty x-array
	
	for (i=0; i<z.length; i++) {           //for loop that checks every elem in the z-array to see if it is 1) Odd and 2) less or equal to the given num. If it is both, it is pushed to the x-array
		if (z[i] % 2 !== 0 && z[i] <= num) {
			x.push(z[i]);
		}
	}
	console.log(x);
	
  return x.reduce(function(a,b){return a+b});  //add up and return all numbers in x-array by using the reduce function
}

sumFibs(10);