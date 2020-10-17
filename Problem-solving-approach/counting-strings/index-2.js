function charCount(str){
    //     make object to return at end 
        var result = {};
    //     loop over string, for each character 
        for (var char of str) {
             char = char.toLowerCase();
               if(/[a-z0-9]/.test(char)) {
                
            
      //     if the char is a number /letter And is a key in the object, add 1 to count
                if(result[char] > 0) {
                   result[char]++;
            } //     if the char is a number  / letter Annd not in the object, add it to object and set value to 1
            else {
                result[char] = 1;
             };
           }
        }
    // if character is something else (space, period, etc.) dont do anythig 
    // return the object with the keys that a lowecase alphanumeric characters in the string; values should be the counts for those characters
        return result;
    }