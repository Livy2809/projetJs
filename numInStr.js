const noNumbers = ["hello", "world", "test"];
const strings = ["hello", "123", "abc123", "world", "42"];

function numInStr(array) {
    let stringsNombres = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (/\d/.test(element)) {
            stringsNombres.push(element);
        }
    }

    return stringsNombres;
}

console.log(numInStr(strings)); 
console.log(numInStr(noNumbers)); 