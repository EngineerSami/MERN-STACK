// Hoare's Partitioning Algorithm
function hoarePartition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)];  
    let i = low - 1;  
    let j = high + 1; 

    while (true) {
        do { i++; } while (arr[i] < pivot);
        do { j--; } while (arr[j] > pivot);
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else {
            return j;
        }
    }
}

//Quick Sort
function quicksort(arr, low, high) {
    if (low < high) {
        const pivotIndex = hoarePartition(arr, low, high);

        quicksort(arr, low, pivotIndex);
        quicksort(arr, pivotIndex + 1, high);
    }
}

const arr = [6, 13, 3, 1, 136, 66, 6, 1306];

console.log(arr)
