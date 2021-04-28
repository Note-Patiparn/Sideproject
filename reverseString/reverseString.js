/ reverse a string 

  solution ONE
function reverseAString(str) {
    //  write code here.
    let reverseStr = str.split('').reverse().join('')
    // split ("") > [ "h" , "e" , "l" , "l" , "o" ] 
    // reverse () > [ "o", "l" , "l" , "e" , "h" ] 
    // join ("") > "olleh"
    return reverseStr
}

  solution TWO
  function reverseAString(str) {
    let reversedStr = '';
    
    for(let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return reversedStr;
}
