function countUpAndDown(n) {
    console.log("Going up!");

    // loop, as n grows loop groows
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("at the top! counting down...");
    // loop, as n grows loop groows
    for (var j = n -1; j >= 0; j --) {
        console.log(j);
    }
    console.log("back down")
}

// so this is 0(n) = big O(n)