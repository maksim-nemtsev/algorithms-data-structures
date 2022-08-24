const arr = [2, 1, 6, 5, 4, 7, 8, 3, 4, 6, 9];
let count = 0;
const linearSearch = (arr, item) => {

    for (let i = 0; i < arr.length; i++) {
        count++
        if (item === arr[i]) {
            return i
        }

    }
    return null
} 
console.log(linearSearch(arr, 4))
console.log('count', count)