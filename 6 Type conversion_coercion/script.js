// Type conversion & coercion 

// Type Conversion 

// eg - 
const inputYear = "1991"
const concatinated = inputYear + 18 
console.log(concatinated)

const dob = "1996"
const newAge = Number(dob) + 18
console.log(newAge)

console.log(Number('Arun'))
console.log(typeof NaN)

// Number to String 

console.log(String(96))
console.log(typeof String(96))

console.log(String(96), 96)


// Type coercion 

console.log('Jack Sparrow is a ' + 32 + ' years old pirate')

console.log('Jack sparrow is a ' + String(32) + ' years old pirate.')

console.log(30 - '10' - '5') // 15

const birthYear = '1996'
const age = 2023 - birthYear

console.log(age)

const n1 = "25"
const n2 = 10
const diffVal = n1 - n2
console.log(n1 - n2)

console.log('30' * '3')

let n = '1' + 1   //11
n = n - 1         //11-1
console.log(n)    // 10