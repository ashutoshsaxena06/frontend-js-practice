// print all subarray of an Array

// let arr = [1,2,3,4,5]
let arr = [10, 20, 30, 40];

printAllSubArray(arr);

function printAllSubArray(arr){
    let i = 0;
    let j = i +1;
    while ( i<arr.length -1) {
        console.log(arr.slice(i));
        i++,j--;
    }
}
console.log('-----')

for(let i =0; i<arr.length; i++) {
    for(let j = i; j<arr.length; j++) {
        console.log(arr.slice(i, j + 1));
    }
}

