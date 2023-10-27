// Filename: complex_code.js
// Description: This code implements a complex sorting algorithm called "Merge Sort".
//              It recursively divides an array into smaller subarrays, sorts them,
//              and then merges them back together to obtain the final sorted array.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arrayToSort = [10, 5, 8, 2, 1, 6, 3, 7, 4, 9];
const sortedArray = mergeSort(arrayToSort);

console.log("Sorted Array:", sortedArray);

// Output: Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]