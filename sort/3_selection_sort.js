const arr = [2, 1, 6, 5, 4, 7, 8, 3, 9, 10];
let count = 0;
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      count++;
    }
    let tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
  }
  return arr;
};
console.log(selectionSort(arr));
console.log("count", count);
//O(n^2)
