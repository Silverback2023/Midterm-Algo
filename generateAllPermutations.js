function generateAllPermutations(str) {
    const results = [];

    // Helper to do recursion
    function permute(arr, l, r) {
        if (l === r) {
            results.push(arr.join(''));
        } else {
            for (let i = l; i <= r; i++) {
                [arr[l], arr[i]] = [arr[i], arr[l]]; 
                permute(arr, l + 1, r);
                [arr[l], arr[i]] = [arr[i], arr[l]]; 
            }
        }
    }

    permute(str.split(''), 0, str.length - 1);
    return results;
}

console.log(generateAllPermutations("NBA"));   // Expected output: ["NBA", "NAB", "BNA", "BAN", "ABN", "ANB"]
console.log(generateAllPermutations("BA"));    // Expected output: ["BA", "AB"]

Overall time complexity O(n⋅n!)
