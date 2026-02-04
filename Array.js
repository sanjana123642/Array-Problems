let arr1 = [5, 7, 9, 10];
let arr2 = [4, 1, 9, 11];

let sumArray = [];

for (let i = 0; i < arr1.length; i++) {
    sumArray[i] = arr1[i] + arr2[i];
}

console.log("Sum of individual index values:", sumArray);