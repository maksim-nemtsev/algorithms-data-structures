const arr = [2, 1, 6, 5, 4, 7, 8, 3, 9,10];
let count = 0;

const bubbleSort = (array) => {

    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length; j++) {
            
            if(array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
        count++;
    }

    return array;
}

console.log(bubbleSort(arr));