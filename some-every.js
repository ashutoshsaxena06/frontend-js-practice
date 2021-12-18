// some - 1 true - returns true || all false returns false if all cb returns false;
Array.prototype.mySome = function(cb){
    let oarr = this;

    for (let index = 0; index < oarr.length; index++) {
        let v = oarr[index];
        let rv = cb(v, index, oarr);

        if(rv == true){
            return true;
        }
    }
    return false;
}

// every - 1 false - returns true || all true returns false if all cb returns false;
Array.prototype.myevery = function(cb){
    let oarr = this;

    for (let index = 0; index < oarr.length; index++) {
        let v = oarr[index];
        let rv = cb(v, index, oarr);

        if(rv == false){
            return false;
        }
    }
    return true;
}

let arr = [
    {name: 'A', age: 25, gender: 'M'},
    {name: 'B', age: 30, gender: 'F'},
    {name: 'C', age: 29, gender: 'F'},
    {name: 'D', age: 28, gender: 'M'},
    {name: 'E', age: 32, gender: 'F'},
    {name: 'F', age: 25, gender: 'M'},
    {name: 'G', age: 27, gender: 'F'},
    {name: 'H', age: 18, gender: 'M'},
]

let allFemaleValidCandidatesSome = arr.filter(a => a.gender== 'F').mySome(fc => fc.age >=20 && fc.age<=35);
console.log(allFemaleValidCandidatesSome);

let allFemaleValidCandidatesEvery = arr.filter(a => a.gender== 'F').myevery(fc => fc.age >=20 && fc.age<=35);
console.log(allFemaleValidCandidatesEvery);