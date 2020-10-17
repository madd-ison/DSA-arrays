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
    console.log(arr)
}

console.log(main())

// Array { length: 6, _capacity: 12, ptr: 3 }

// pushed 6 values, so length = 6
// capacity = 12 - resized once to 3 (size ratio) and a second time to 12 
// --> (this.length (3) + 1 * size ratio (3))

// memory address (ptr) = 3. When we resized the first time the memory address 
// didn't change because it was already 0. When we resized the second time 
// we had to make a copy of our array (length 3) and move it to position 3 
// (then free space from 0 to 2). Then we increased the size from that point
