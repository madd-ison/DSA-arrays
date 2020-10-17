// Given an array of numbers, write an algorithm that outputs an array where each 
// index is the product of all the numbers in the input array except for the number 
// at each current index. See the following example input and output.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function findProducts(numArray) {
    let totalProduct = 1;
    let products = [];
  
    for (let i = 0; i < numArray.length; i++) {
      totalProduct *= numArray[i];
    }
  
    for (let j = 0; j < numArray.length; j++) {
      const product = Math.floor(totalProduct / numArray[j]);
      products.push(product);
    }
  
    return products;
  }
    
  console.log(findProducts([1, 3, 9, 4]));
  