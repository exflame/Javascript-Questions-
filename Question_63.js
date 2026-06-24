// findIndex() first user over 18 
// findIndex is a method used to find the index of the first element in an array that satisfies a given condition

const users = [
    {id:1, name:'Andy', age: 2 },
    {id:2, name:'Bert', age: 12 },
    {id:3, name:'Catyln', age: 17 },
    {id:4, name:'Desmond', age: 22 },
    {id:5, name:'Emerald', age: 23 },
    {}
]


let arr = [ 7 , 22 , 5 , 19 , 53 , 12 , 8 ]

let found = users.findIndex((users) => users.age > 18)

console.log(found)