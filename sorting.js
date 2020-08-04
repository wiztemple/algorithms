// Sorting Algorithms
/* Sorting is the process of re-arranging items in a collection (e.g an array) so that items are in some kind of order */

// Bubble Sort
// let arr = [6,3,5,10,2,4,1,0,5,8,7,3,9];
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(
  bubbleSort([4, 5, 1, 2, 6, 90, 34, 23, 13, 34, 23, 56, 78, 47, 0, 9]),
);

function bubbleSort2(arr) {
  do {
    var swapped = false;
    for (let i = 0; (i = arr.length); i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
console.log(bubbleSort2([6, 3, 5, 10, 2, 4, 1, 0, 5, 8, 7, 3, 9]));
