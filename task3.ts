// initializing array

let arr = [1, 2, 3, 4, 5];
arr.push(20);
console.log("new arr", arr);

// removing last element using pop method

arr.pop();
console.log("After removing last element", arr);

// removing first element from array

arr.shift();
console.log("After removing first element from array", arr);

// adding first element to array

arr.unshift(10);
console.log("After adding new element on first index", arr);

//created subarray
// slice

let subarray = arr.slice(0, 5);
console.log("after slice", subarray);

let subArray1 = arr.splice(1, 3);
console.log("afterSplice", subArray1);
