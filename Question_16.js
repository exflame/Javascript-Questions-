// Check if a word is a palindrome

let string3 = 'Management'

let reverse = string3.split("").reverse().join("")

if (reverse === string3) {
    console.log('It is a palindrome')

} else {
    console.log('not a palindrome')
}
