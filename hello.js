// Author: Masai'a Abrams

let readline = require('readline-sync')

let name = Number(readline.question('what is your name? '))

let ageAsAString = readline.question('what is your age? ')
let age = Number(ageAsAString)

console.log ('have a nice day ' + name);

console.log('In 2028 you wil be ' + (age + 10) + 'years old ')
