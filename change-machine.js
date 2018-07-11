// Author: Masai'a Abrams

let readline = require('readline-sync')
let amount = Number(readline.question('please enter you amount in cents '))
let centAsAString = (amount + ' cents makes: ' )
let cent = Number(centAsAString)

console.log (amount + ' cents make')

let quarters = Math.floor (amount / 25)
console.log(quarters + ' quarters')

amount = amount - quarters * 25

let dimes = Math.floor (amount / 10)
console.log (dimes + ' dimes')

amount = amount - dimes * 10

let nickels = Math.floor (amount / 5)
console.log (nickels + ' nickels')

amount = amount - nickels * 5

let pennies = Math.floor (amount / 1)
console.log (pennies + ' pennies')
