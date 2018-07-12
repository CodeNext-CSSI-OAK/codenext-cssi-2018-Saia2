// Author: Masai'a Abrams
let readline = require("readline-sync");

console.log();
console.log("_________________________________________________________________");
console.log("                          HAUNTED HOUSE");
console.log("                         A game by Masai'a");
console.log("_________________________________________________________________");
let user = readline.question("What is you username?");
console.log("Ok, " + user + ", you are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
 if(enterHouse == "y" || enterHouse == "yes") {
   console.log("Great hope you don't regret your decision!");
   console.log("  ");
   console.log("You walk up the stairs of the house. Each stair creaks as you step. ");
   console.log("As you reach the top of the stairs, the screams become louder and more intense. ");
   console.log("Turn the flashlight on your phone on and open the door. ");
   console.log("You see there are three doors. ");
   console.log("The first door is open and leads to the kitchen. There you see a bloody knife. ");
   console.log("The second door is also open. It leads to the master bedroom where you see a shadowy figure.");
   console.log("The last door leads to another bedroom where you see a pool of blood. ");

   let threeDoors = readline.question("Which door will you enter? (first, second, or third) ");
   if (threeDoors = "first" || threeDoors = "first door")
   console.log("You step over the bloody knife and shine your flashlight around the kitchen. ")
   console.log("You see the bloody mess on the counter, the cabinets, and the refrigerator. ")
} else {
  console.log("Oh well. Bye! ");

}
console.log("Thanks for playing!");
