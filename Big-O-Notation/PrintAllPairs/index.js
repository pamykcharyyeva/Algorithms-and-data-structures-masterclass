// nested loop 
// two loops 
function printAllPairs(n) {
    // O(n) loop
    for (var i=0; i < n; i++) {
        // O(n) inside nested loop
        for (var j =0; j < n; j++) {
            console.log(i,j);
        }
    }
}

//  because this is O(n) operation inside of O(n) operations
// this is O(n*n) which means O(n2)
// O(n2) means if n grows, runtime grows at the rate of Square 