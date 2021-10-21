//Array Filling within given range.

function getSequence(low, high) {
    let arr = [];
    for (let i = low; i <= high; i++) {
        arr.push(i);
    }
    return arr;
}
// Results:
console.log(getSequence(8, 24));

//==================================================================

//Printing Array elements
function print(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

//Results:
print(getSequence(8, 24));

//==================================================================

//Printing the Maximum value in Array
console.log(Math.max(...getSequence(8, 24)));
//Algorithm
//Create Array
let maxArr = [24, 0, 0, 43, 234, 2323, 121, 12];
//maximum set to first element
let max = maxArr[0];

for (let i = 1; i < maxArr.length; i++) {
    if (max < maxArr[i]) {
        max = maxArr[i];
    }
}
console.log(max)

//==================================================================

//Adding 15 to the end of an Array
maxArr.push(15);

//==================================================================

//Remove the first element.
maxArr.shift();

//==================================================================

//Sorting array and loggin the last element.
console.log(maxArr.sort((a, b) => a - b)[maxArr.length - 1]);

//==================================================================

//Printing Array elements bigger than 40.
maxArr.filter(el => el > 5).forEach(el => console.log(el));

//==================================================================

//Enter new element after the 3rd element in array.
//Splice method modifies the current array.
maxArr.splice(4, 0, 50);
console.log(maxArr);

//==================================================================

//Log all the elements after the 3rd in an Array
maxArr.slice(3).forEach(el => console.log(el));

//==================================================================
//Compute Sum. if numbers are equal, triple the sum.
let a = 0;
let b = -0;
// console.log(a == b ? (a + b) * 3 : (a + b));
//How real man writes:
if (a == b) {
    console.log(`${(a + b) * 3} Same Values`);
} else {
    console.log(`${a + b} Different Values`);
}