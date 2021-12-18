// intersection


// union
let arr1 = [3, 5, 8, 9, 10];
let arr2 = [1, 6, 10];

let result1 = arr2.filter(v => arr1.includes(v)==false);
let result2 = arr1.concat(result1);
console.log(result2);

let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34]
    [10, 51, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51]
    [11, 50, 75, 85, 92, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
    [10, 50, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
];

// [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92] (union of arrays)
const result3 = arr2d.reduce( function(pv, cv, ci, oarr){
const interim = cv.filter( v => pv.includes(v) == false);
let union = pv.concat(interim);
return union;
});

console.log(result3);