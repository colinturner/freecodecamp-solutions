function rot13(str) { // LBH QVQ VG!
    var a = 0;               //initialize var 
    z = [];           //create empty array

    for (i = 0; i < str.length; i++) {      //for loop
        a = str.charCodeAt(i);          //check for the char code of each char
                                        //in the cipher
        if (a>90 || a<65) {             //exclude modifications on non-alpha chars
        	a = String.fromCharCode(a);
        	z.push(a);
        } else if (a >= 78) {          //substract 13 from low alphabet letters
            a = a - 13;
            a = String.fromCharCode(a);
            z.push(a);
        } else {
            a = a + 13;             // add 13 to high alphabet letters
            a = String.fromCharCode(a);
            z.push(a);
        }
        a = 0;
    }

    return z.join("");          //join the result into one string
}