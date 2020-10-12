function double(arr) {
    // it takes an array and making a new array
    let newArr = [];
// a loops over length of first array 
    for (let i=0; i< arr.length; i++) {
        // and multiplies each item and pushes that on into new array
        newArr.push(2 * arr[i]);
    }
    // and returns new array
    return newArr;
}


// this is O(n)
// array gets longer and longer directly proportion length of input 
// if arr is 10 items, we storing 10 items and etc
// so because it takes space for 10 items it is O(n) space coplexity 