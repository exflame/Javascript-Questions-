// find() first user over 18
// find methode is used to search through an array and return the first element that satisfies a given condition

const users = [
    {id:1, name:'Andy', age: 27 },
    {id:2, name:'Bert', age: 12 },
    {id:3, name:'Catyln', age: 17 },
    {id:4, name:'Desmond', age: 22 },
    {id:5, name:'Emerald', age: 23 },
    {}
]


let arr = [ 7 , 22 , 5 , 19 , 53 , 12 , 8 ]

let found = users.find((users) => users.age > 18)

console.log(found)