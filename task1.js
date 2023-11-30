"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Get user input
console.log("Welcome to store");
console.log("What you wnat to buy 1)Fruits  2)Vegitables 3)Groceries");
var userInput = readlineSync.question("Type any one option please use exact same spellings");
if (userInput == "Fruits") {
    console.log("You selected ", userInput);
    console.log("You want to buy 1) Apple  2)Mango 3)Peach");
    var selectedFruit = readlineSync.question("Type any one option please use exact same spellings");
    if (selectedFruit === "Apple") {
        console.log("Your Bill is $20");
    }
    else if (selectedFruit === "Mango") {
        console.log("Your bill is $30");
    }
    else if (selectedFruit === "Peach") {
        console.log("Your bill is $70");
    }
    else {
        console.log("Type valid option");
    }
}
else if (userInput == "Vegitables") {
    console.log("You selected ", userInput);
    console.log("You want to buy 1) Carrot  2)Potato");
    var selectedFruit = readlineSync.question("Type any one option please use exact same spellings");
    if (selectedFruit === "Carrot") {
        console.log("Your Bill is $20");
    }
    else if (selectedFruit === "Potato") {
        console.log("Your bill is $70");
    }
    else {
        console.log("Type valid option");
    }
}
else if (userInput == "Groceries") {
    console.log("You selected ", userInput);
    console.log("You want to buy 1) Nodels  2)Ketchup");
    var selectedFruit = readlineSync.question("Type any one option please use exact same spellings");
    if (selectedFruit === "Nodels") {
        console.log("Your Bill is $20");
    }
    else if (selectedFruit === "Ketchup") {
        console.log("Your bill is $70");
    }
    else {
        console.log("Type valid option");
    }
}
else {
    console.log("Type valid option");
}
