// count consonants in a string 
let str = 'javascript'

let vowels = ['a', 'e','i','o','u']

let count = 0

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
}

if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
    count ++
}

console.log(count)