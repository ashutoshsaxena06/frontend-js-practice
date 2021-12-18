// print all subarray of an Array

let arr = [3, 7, 19, 21, 23];

for (let index = arr.length -1; index >=0; index--) {
    if(isprime(arr[index])){
        arr.splice(index, 1);
    }
}
displayArray(arr);

function isprime(ele){
    for(let i=2 ; i < ele/2; i++) {
        if(ele%i == 0) return false;
     }
     return true;
}

function displayArray(arr){
    console.log(`${arr} with length =${arr.length}`);
}