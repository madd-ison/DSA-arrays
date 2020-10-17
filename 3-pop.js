const Array = require('./1-array-class')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr)
}

console.log(main())

// Array { length: 3, _capacity: 12, ptr: 3 }

// length = 3, pushed 6 values then removed 3

// capacity is still 12 because we had to resize twice before, so we're left with
// quite a bit of extra memory

// Memory address = 3. Memory address didn't change the first time
// because it was already 0. When we resized the second time we had to make a copy
// of our array (length 3) and move it to position 3 (then free space from 0 to 2).
// Then we increased the size from that point