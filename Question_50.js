// find minimum array

let array = [3,1,7,9,11]

function findMin (arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin(array));