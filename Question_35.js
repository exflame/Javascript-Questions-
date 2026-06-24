// Factorial Calculator

let n = 3

if (n<0) return 'Error factorial for negative numbers do not exist'

let fact = 1

for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(fact)