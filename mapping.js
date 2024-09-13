const lettersArray = ['a', 'b', 'c'];
function mapping(letters) {
        
    const result = {};

    for (let i = 0; i < letters.length; i++) {
        result[letters[i].toLowerCase()] = letters[i].toUpperCase();
    }

    return result;
}

console.log(mapping(lettersArray));


