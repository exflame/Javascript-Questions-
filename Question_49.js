// Find maximum number in an array

let array = [3,5,7,9,11]

function findMax (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(array));
