const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

function sum(prev, next){
    return prev + next;
}

console.log(`$${total.toFixed(2)}`);

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
console.log(maximum);
console.log(minimum);