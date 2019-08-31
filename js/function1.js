//food prices
var orange_juice_cost = 150;
var burger_cost = 250;
var soda_cost = 100;

//user's money
var account_balance = 1000;

//Check account ballance
function checkBalance(amt) {
    if (account_balance - amt >= 0) {
        return true;
    } else {
        console.log('INSUFFICIENT FUNDS')
        return false;
    }
}

//drink orange juice
function drink_orangjuice() {
    if (checkBalance(orange_juice_cost)) {
        account_balance = account_balance - orange_juice_cost;
        console.log('Enjoy your juice');
    }
    console.log('/tBalance:', account_balance.toFixed(2));
}

//Eat Burger
function eat_burger() {
    if (checkBalance(burger_cost)) {

        account_balance = account_balance - burger_cost;
        console.log('Enjoy your burger');
    }
    console.log('/tBalance:', account_balance.toFixed(2));
}

// Eat soda
function drink_soda() {
    if (checkBalance(soda_cost)) {
        account_balance = account_balance - soda_cost;
        console.log('Enjoy your soda');
    }
    console.log('/tBalance:', account_balance.toFixed(2));

}
//Meal list
var mealList = [drink_orangjuice, eat_burger, drink_soda, drink_orangjuice, eat_burger, drink_soda];

function visitCarninval(mList) {
    for (var i = 0, num = mList.length; i < num; i++) {
        //mList[i]();
        //mList[i].call();
    }
}


visitCarninval([eat_burger, drink_orangjuice, drink_soda, drink_orangjuice]);