let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);


console.log(numbers);
console.log(maximum);

let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetable = ["carrots","celery","potatoes"];
let foods = [...fruits, ...vegetable];
console.log(foods);
