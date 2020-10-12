function sum(arr) {
    // total is on number 
    let total = 0;
    // i=0 is another number 
    for (let i=0; i< arr.length; i++) {
       total += arr[i];
    }
    return total;
}

// this is example of big O const which means O(1)
// no matter size of n (in this example its arr), as it grows it doesnt have impact on space
// because we only have two varables ( total= 0 and i = 0), we adding to varables but 
// we are not creating new varables so it doesnt take anymore space there