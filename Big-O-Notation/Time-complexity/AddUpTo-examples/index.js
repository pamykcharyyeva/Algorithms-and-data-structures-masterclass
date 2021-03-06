// Suppose we want to write a function that calculates the sum of the all numbers from 1 up to 
// (and including) some numbers n. 


// first solution 
// it has loop inside, and as n grows loop grows as well. so this O(n)
function addUpTo(n) {
    // create total variable accumulator
    let total = 0;
    // loop though all those numbers
    for (let i = 1; i <=n; i++) {
        // add them in one at a time starting at 1 and all the way up to n 
        total += i;
    }
    // at the end we return total 
    return total;
}




// second solution
// short one line and using math
// this one has only 3 oporations (*, +, /)
// grows of n is not reflected on runtime so this 0(1)
function addUpTo(n) {
    return n * (n+1) / 2;
}