function myReplace(str, before, after) {

    if (before.charAt(0) === before.charAt(0).toUpperCase()) {  //if the before word begins with a capital letter, then capitalize the after word - while not forgetting to substr tack on the end of the after word after the capital letter by using substr
        str = str.replace(before, (after.charAt(0).toUpperCase()) + after.substr(1));
    } else {
        str = str.replace(before, after);   //if the word to be replaced is all lowercase, everything is very easy. Just use a simply replace method
    }

    return str;   //return the updated string
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");