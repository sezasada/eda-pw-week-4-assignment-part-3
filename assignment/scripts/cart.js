console.log('***** Cart Functions *****');
let basket = [];
// created variable basket.
function addItem(item) {
    console.log('added new item', item);
    basket.push(item);
    return true;
}
// function that will add items to the array.
addItem(' corn');
addItem(' beef');
// added corn and beef to items.
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem(' apples'));
//added apples to basket
console.log(`Basket is now ${basket}`);
//logged basket to console.

function listItems(basket) {
    for(let j = 0; j < basket.length; j++) {
        console.log(basket[j]);
    }
}
listItems(basket);
//function that will list each item in the console.


// function that will delete each item in the basket array.
console.log('Deleted Items');
function empty()  {
    for ( let x = 0; x = basket.length; x++) {
        console.log(basket.pop());
    }
} 
empty();
// calling the deleted items
console.log(`basket is now empty ${basket}`)
console.log('this is basket', basket);
// checking to see if items are now deleted. 
