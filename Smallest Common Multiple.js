function smallestCommons(arr) {

    arr.sort(function(a, b) {    //sort the two numbers, lowest to highest
        return a - b;
    });
    var z = [];   //create empty z-array

    for (var i = arr[0]; i <= arr[1]; i++) {  //list all the numbers between our boundaries and push them into the z-array. We now have a complete list of integers between our given lower and upper limits.
        z.push(i);
    }

    var a = z[0];     //assign the first element of z-array to var a

    for (var i = 1; i < z.length; i++) {   //iterate through the entire z-array
        var b = z[i];           //iterate through each element of z-array
        var c = a;              //set var c equal to a equal to first element of z-array

        while (a && b) {    //while a and b are both true, aka non-zero
            if (a > b) {    //if a is greater than b, turn a into the remainder of a divided by b. Otherwise turn b into the remainder of b div by a
                a %= b;
            } else {
                b %= a;
            }
        }
        console.log(a);
        a = (c * z[i] / (a + b));    //once while loop finishes, multiply first element of z-array by the i-th element of z and divide by the sum of the new a and new b. Set this all equal to a and return a.
    }
    return a;

}



smallestCommons([1, 5]);
