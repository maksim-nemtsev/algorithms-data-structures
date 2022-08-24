const arr = [2, 1, 6, 5, 4, 7, 8, 3, 9, 10];
let count = 0;

const quickSearch = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let lessArray = [];
  let greaterArray = [];

  for (let i = 0; i < array.length; i++) {
    count++;
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      lessArray.push(array[i]);
    } else {
      greaterArray.push(array[i]);
    }
  }
  return [...quickSearch(lessArray), pivot, ...quickSearch(greaterArray)];
};
console.log(
  "🚀 ~ file: 6_quick_search.js ~ line 23 ~ quickSearch ~ quickSearch",
  quickSearch(arr)
);
console.log(
  "🚀 ~ file: 6_quick_search.js ~ line 23 ~ quickSearch ~ count",
  count
);
