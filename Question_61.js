// filter() odd numbers
// filter method in javascript is used to create a new array containing only the elements that pass a given test it also doesn't modify the original 


let arr = [ 7 , 1 , 5 , 4 , 9 , 3 , 2 , 8 ]

let filtered = arr.filter(arr => arr % 2 != 0)

console.log(filtered)