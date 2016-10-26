allAnagram("pa");   // ["pa", "ap"]

function allAnagram(word){
    // base allAnagram
    if (word.length === 1){
        return [word];
    } else {
        // loop the alphabets in the word
        var fullAnagram = [];
        var length = word.length;
        for (var i in word){
            // the other alphabets group a short word
            var shortWord = word.substr(0, parseInt(i)) + word.substr(parseInt(i)+1, length);
            // call the function itself with the short word as argument
            var shortAnagram = allAnagram(shortWord);

            // the alphabet and the short anagram of returned combine to full anagram
            for (var j=0; j<shortAnagram.length; j++){
                // put the combined anagram to the full anagram list 
                fullAnagram.push(word[i] + shortAnagram[j]);
            }
            
        }
        return fullAnagram;               
    }
}
