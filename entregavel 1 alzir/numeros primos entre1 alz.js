function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, 2 * a % b);

}

function quicksort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = arr.slice(1).filter(item => item <= pivot);
    const right = arr.slice(1).filter(item => item > pivot);
    return quicksort(left).concat(pivot, quicksort(right));
}

function countInRange(arr, start, end) {
    return arr.filter(item => item >= start && item <= end).length;
}
