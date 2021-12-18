// Map vs Filter
let arr = [11, 16, 18, 17, 23, 42, 11, 37];

let mres = arr.map(v => v % 2 == 1);
let fres = arr.filter(v => v % 2 == 1);

console.log("mres", mres);
console.log("fres", fres);

// Map and filter
console.log('--------------');
// Q2 - print product name in Uppercase if price >=100
let products = [
    {name:"T-Shirts", price:25},
    {name:"Headphones", price:125},
    {name:"Keyboard", price:75},
    {name:"Monitor", price:200},
]

let result_upp =  products.filter(product => product.price >= 100).map(product => product.name.toUpperCase()); 

console.log(result_upp);

console.log('--------------');

// Q3 - print product name in Uppercase if price >=100 and lowercase if price <=100

let values =  products.map(p => p.price <=100 ? p.name.toLowerCase() : p.name.toUpperCase()); 
console.log(values);

console.log('--------------');

// Q4 - find cube of number whose square <=1000
let numbers = [5, 83, 24, 67, 71, 12, 24, 7];

const result = numbers.filter(num => num*num <=1000).map(num => num*num*num);

console.log(result);

console.log('--------------');


// Q5 - cubes of numbers whose cubes are less than 10000
const cubes = numbers.map(c => c * c * c).filter(c => c < 10000);
console.log(cubes);

// Q6 what is returned ?
const result1 = numbers.map(num => num * num).   // updated the numbers array with square of each number
            filter(num => num <= 1000).     // checking each number square <= 1000
            map(num => num*num*num);        // num is square of original number and now result is returned as num^6
