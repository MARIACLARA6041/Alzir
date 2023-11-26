function somatorio(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Exemplo de uso:
console.log(somatorio([1, 2, 3, 4, 5])); // Saída: 15
