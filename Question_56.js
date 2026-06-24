// remove duplicates in array

let array = [3,5,7,9,11,3,5,7]

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates(array));