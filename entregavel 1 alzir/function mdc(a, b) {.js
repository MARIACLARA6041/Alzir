function mdc(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

// Exemplo de uso:
console.log(mdc(48, 18)); // Saída: 6
