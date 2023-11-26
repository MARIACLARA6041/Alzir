function quicksort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

// Exemplo de uso:
console.log(quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5])); // Saída: [1, 1, 2, 3, 4, 5, 5, 6, 9]
