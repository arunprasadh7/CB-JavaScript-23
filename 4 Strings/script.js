// Strings 

const name = 'Jack Sparrow'
const job  = 'Pirate'
const birthYear = 1990
const age = 2023 - birthYear

// Normal string concatenation
const normalString = "Captain " + name + " is a " + job + " and was born in " + birthYear
console.log(normalString)



// Using String Templates 
const tempString = `Captain ${name} is a ${job} and was born in ${birthYear}. Age is ${2023 - birthYear}`
console.log(tempString)