// Count Occurrences means that you will be given an array and a value and you will count the number of occurrences of that value in the array using the filter method.

const arr = [1, 2, 2, 3,1 , 1 ,1 , 2, 4];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    count++;
  }
}

console.log(count);