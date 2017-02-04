/**
 * Created by grey14 on 1/28/2017.
 */
var birdTypeNames = [];
var birdPrices = [];
var birdAvailable = [];
var birdSold = [];



// 4. fill birds at first time
function fillBirdsAtFirstTime() {
    addNewType("eagle", 5, 1);
    addNewType("duck", 2, 15)
};

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
};

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
        console.log(typeName + " is cost " + birdPrices[index] + " $");
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

// 7. Define the cheapest type of bird
function defineTheCheapest() {
    var cheapest = Math.min.apply(null, birdPrices);
    console.log("cheapest = " + cheapest);
}

// 7. Define the most expensive type of bird
function defineTheMostExpensive() {
    var maxPrice = Math.max.apply(null, birdPrices);
    var index = birdPrices.indexOf(maxPrice);
    console.log("The most expensive is " + birdTypeNames[index] + " with price " + maxPrice);
}

// 6. Define the most sellable type of bird
function defineTheMostSellable() {
    var maxCount = Math.max.apply(null, birdSold);
    var index = birdSold.indexOf(maxCount);
    console.log("The most sellable is " + birdTypeNames[index] + " with count of " + maxCount);
}

// 6. Define the least sellable type of bird
function defineTheLeastSellable() {
    var maxCount = Math.min.apply(null, birdSold);
    var index = birdSold.indexOf(maxCount);
    console.log("The least sellable is " + birdTypeNames[index] + " with count of " + maxCount);
}

// 8. Define the most profitable kind of bird
function defineTheMostProfitable() {
    var arr = [];
    for (var i = 0; i < birdSold.length; i++) {
        arr[i] = birdSold[i] * birdPrices[i];
    }
    var max = Math.max.apply(null, arr);
    var index = arr.indexOf(max);
    console.log("The most profitable is " + birdTypeNames[index] + " with amount of " + max);
}

// 8. Define the least profitable kind of bird
function defineTheLeastProfitable() {
    var arr = [];
    for (var i = 0; i < birdSold.length; i++) {
        arr[i] = birdSold[i] * birdPrices[i];
    }
    var min = Math.min.apply(null, arr);
    var index = arr.indexOf(min);
    console.log("The least profitable is " + birdTypeNames[index] + " with amount of " + min);
}

// Print state
function printState() {
    console.log("Type\t\tPrice\t\tNumber\t\tSold");
    for (var i in birdTypeNames) {
        console.log(
            birdTypeNames[i] + "\t\t\t" +
            birdPrices[i] + "$\t\t\t" +
            birdAvailable[i] + "\t\t\t" +
            birdSold[i]);
    }
}

fillBirdsAtFirstTime();
addBirds("eagle", 5);
sellBirds("eagle", 3);
soldAmount();
removeType("duck");
addNewType("duck", 2, 100);
addNewType("hen", 30, 20);
addBirds("duck", 5);
getPrice("duck");
changePrice("duck", 55);
getPrice("duck");
amountOfMoney();
sellBirds("duck", 4);
defineTheCheapest();
defineTheMostExpensive();
defineTheMostSellable();
defineTheLeastSellable();
defineTheMostProfitable();
defineTheLeastProfitable();
printState();












