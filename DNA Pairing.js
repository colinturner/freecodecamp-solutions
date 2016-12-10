function pairElement(str){   //set up an object with the DNA pairs
  var table = {
    C : 'G',
    G : 'C',
    A : 'T',
    T : 'A'
  };

str = str.split(""); //split up our DNA string into individual chars
z = [];   //create empty z-array

for (i=0; i<str.length; i++) {       //this for loop says: assign to a new var "a" each DNA char plus its complementary base - retrieved from the object "table".
	var a = ((str[i] + table[str[i]]).split(""));  //this pair is then split and pushed over to the z-array
	z.push(a);
}

  return z;   //after the for-loop has run through each char of the DNA string, we return the completed z-array
}

pairElement("CGAT");