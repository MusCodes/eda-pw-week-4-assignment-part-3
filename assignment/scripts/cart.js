console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];

// first function
function addItem(item) {
  basket.push(item);
  return item;
  // instructions ask to return true, I had it that way
  // but it wasn't returning a string when i tried
  //passing it through the 'item' parameter.
}
//function test
console.log(addItem("eggs"));
console.log(addItem("steak"));
console.log(addItem("watermelon"));
console.log(addItem("pears"));

// Second function.
function listItems() {
  for (let loop of basket) console.log(loop);
}
//second function test:
listItems();
listItems();
listItems();
listItems();
listItems();

// third function
function empty() {
  return (basket = []);
}
//third function test.
console.log(empty());

// I will wait to get feed back on this than I will attempt the stretch goals.
