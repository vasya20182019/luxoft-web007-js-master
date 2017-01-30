/**
 * Created by grey14 on 1/28/2017.
 */
var birdTypeNames = [];
var birdPrices = [];
var birdAvailable = [];
var birdSold = [];

fillBirdsAtFirstTime();
addBirds("eagle", 5);
sellBirds("eagle", 3);
soldAmount();
removeType("duck");
addNewType("duck", 2, 100)
addBirds("duck", 5);
getPrice("duck");
changePrice("duck", 55);
getPrice("duck");
amountOfMoney();

// 4. fill birds at first time
function fillBirdsAtFirstTime() {
    addNewType("eagle", 5, 1);
    addNewType("duck", 2, 15)
}

// 3. add new type of bird
function addNewType(typeName, price, available) {
    if (birdTypeNames.indexOf(typeName) === -1) {
        birdTypeNames.push(typeName);
        birdPrices.push(price);
        birdAvailable.push(available);
        birdSold.push(0);
        return;
    }
    throw new Error("typeName=" + typeName + " is already exist!");
}

// 10. remove type of bird
function removeType(typeName) {
    var index = birdTypeNames.indexOf(typeName);
    if (index !== -1) {
        console.log(typeName + " before: " + birdTypeNames.length);
        birdTypeNames.splice(index, 1);
        birdPrices.splice(index, 1);
        birdAvailable.splice(index, 1);
        birdSold.splice(index, 1);
        return;
    }
    throw new Error("typeName=" + typeName + " does not exist!");
}

// 1. change price for bird
function changePrice(typeName, price) {
    var index = birdTypeNames.indexOf(typeName);
    if (index !== -1) {
        birdPrices[index] = price;
        return;
    }
    throw new Error("typeName=" + typeName + " does not already exist!");
}

// 2. add one more bird
function addBirds(typeName, amount) {
    var index = birdTypeNames.indexOf(typeName);
    if (index !== -1) {
        console.log(typeName + " before: " + birdAvailable[index]);
        birdAvailable[index] += amount;
        console.log(typeName + " after: " + birdAvailable[index]);
        return;
    }
    throw new Error("typeName=" + typeName + " does not exist!");
}

// 12. Продать определенное количество птиц одного вида
function sellBirds(typeName, amount) {
    var index = birdTypeNames.indexOf(typeName);
    if (index !== -1) {
        if (birdAvailable[index] < amount) {
            throw new Error("We have only " + birdAvailable[index] + " " + birdTypeNames[index]
            + " instead of " + amount);
        }
        console.log(typeName + " before available: " + birdAvailable[index]);
        console.log(typeName + " before sold: " + birdSold[index]);
        birdAvailable[index] -= amount;
        birdSold[index] += amount;
        console.log(typeName + " after available: " + birdAvailable[index]);
        console.log(typeName + " after sold: " + birdSold[index]);
        return;
    }
    throw new Error("typeName=" + typeName + " does not already exist!");
}

// 11. Сколько продано приц
function soldAmount() {
    var sum = 0;
    for (var index in birdSold) {
        sum += birdSold[index];
    }
    console.log("Sold amount=" + sum)
}

// 9. Get price for a type of bird
function getPrice(typeName) {
    var index = birdTypeNames.indexOf(typeName);
    if (index !== -1) {
        console.log(typeName + "is cost " + birdPrices[index] + " $");
        return;
    }
    throw new Error("typeName=" + typeName + " does not already exist!");
}

// 5. How much money have we earned
function amountOfMoney() {
    var sum = 0;
    for (var index = 0; index < birdTypeNames.length; index++) {
        sum += birdPrices[index] * birdSold[index];
    }
    console.log("Amount of money " + sum + " $");
}


// Print state
// 6. Define the most sellable type of bird
// 6. Define the least sellable type of bird
// 7. Define the most expensive type of bird
// 7. Define the cheapest type of bird
// 8. Define the most profitable kind of bird
// 8. Define the least profitable kind of bird




