// Nested Objects

const person = {
    name: 'David',
    age:17,
    type : {
        int: 46,
        bool: 'true',
        string : 'my name is david',
    }
    
}
console.log(person.type.int)