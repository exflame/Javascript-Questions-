// average of array

let array = [3,5,7,9,11]

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]

        sum = sum /arr.length
        
    }
    return sum;
}

console.log(sumArray(array));