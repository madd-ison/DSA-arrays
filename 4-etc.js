const Array = require('./1-array-class')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // add one item
    arr.push("tauhida");
    console.log(arr)
}

console.log(main())

// Array { length: 1, _capacity: 3, ptr: 0 }

// added one item, so length = 1
// capacity is still at initial 3 because it can accommodate the one item
// address is initial 0