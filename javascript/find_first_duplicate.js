function findFirstDuplicate(arr) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return arr[i];
    }
    seen[arr[i]] = true;
  }
  return -1;
}

if (require.main === module) {
  console.log(findFirstDuplicate([0, 2, 3, 5, 7, 9]));
  console.log(findFirstDuplicate([1, 2, 3, 4, 1, 3, 2]));
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
