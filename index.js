function hasTargetSum(array, target) {
  // Write your algorithm here
  // Loop through each number in the array
  for (let i = 0; i < array.length; i++) {
    // Loop through each other number in the array
    for (let j = i +1; j < array.length; j++) {
      // Check if the pair of numbers add up to the target
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  // If no pairs add up to the target, return false
  return false
}

/* 
  Write the Big O time complexity of your function here 
  The time complexity of the function is O(n^2), where n is the number of elements in the array.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target) {
    for each number in array:
      for each other number in array:
        if the two number add up to the target:
          return true
    return false
  }
*/

/*
  Add written explanation of your solution here
  The function `hasTargetSum` takes an array of numbers and a target number as input. 
  It uses two nested loops to check every possible pair of numbers in the array. For each pair,
   it checks if the sum of the two numbers equals the target number. If such a pair is found,
    the function returns true. If no such pair is found after checking all pairs, the function returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
