// Merge Objects

const person1 = {
    name : 'david',
    age : 17
}

const person2 = {
    weight : 34,
    height : 167
}

const person3 = {
    ...person1,
    ...person2,
}

console.log(person3)