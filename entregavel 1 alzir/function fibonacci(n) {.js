function fibonacci(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}

// Exemplo de uso:
console.log(fibonacci(8)); // Saída: [0, 1, 1, 2, 3, 5, 8, 13]
