function countInRange(arr, first, N) {
    return arr.filter(num => num >= first && num <= N).length;
}

// Exemplo de uso:
console.log(countInRange([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 7)); // Saída: 5
