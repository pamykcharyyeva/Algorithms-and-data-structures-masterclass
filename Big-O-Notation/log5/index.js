// this is O(n) because if n grows, number of operations grow thought loop
// because n can be any number infinity
function logAtLeast5(n) {
    for (var i =i; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}


// this is O(1) .....big O of constant because n grows here, it doesnt matter to runtime
// it doesnt go more then 5
// even if n will be 1000, loop will not run more then 5 times since thats when it stops 
// if n grows, Big O of constant O(!)
function logAtMost5(n) {
    for (var i =i; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}