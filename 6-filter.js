// Imagine you have an array of numbers. Write an algorithm to remove all 
// numbers less than 5 from the array. DO NOT use Array's built-in .filter() 
// method here; write the algorithm from scratch.

function customFilter(arr) {
    let idx = 0
    let filterOut = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5 ) {
            filterOut++;
        } else {
            arr[idx] = arr[i]
            idx++
        }
    }
    while (filterOut > 0) {
        arr.pop()
        filterOut--
    }
    return arr
}
  
console.log(customFilter([1, 7, 9, 3, 2, 0, 10])) 
