// Prime number checker

let no = 4

if (no <=1 ) {
    console.log('not a primenumber')
} else {
    for (let i=2; i<no; i++) {
        if (no % i == 0) {
            console.log('not a prime number')
            break
        } else {
            console.log('prime number')
            break
        }   }    
} 