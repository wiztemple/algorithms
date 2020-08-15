// Objectives
// 1. Describe what a searching algorithm is
// 2. Implement linear search on arrays
// 3. Implement binary search on sorted arrays
// 4. Implement a naive string searching Algorithm
// 5. Implement the KMP string searching algorithm
const linearSearch = (arr, val) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch([13, 34, 56, 22, 43, 78, 54, 65, 6, 2, 1, 9], 13));

const binarySearch = (sortedArr, element) => {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (sortedArr[middle] !== element && start <= end) {
    if (element < sortedArr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return sortedArr[middle] === element ? middle : -1;
};
console.log(binarySearch([2, 3, 5, 7, 8, 12, 23, 27, 32, 37, 42, 46], 50));

const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i <= long.length; i++) {
    for (let j = 0; j <= short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
};

console.log(naiveSearch("lorie loled", "lol"));
