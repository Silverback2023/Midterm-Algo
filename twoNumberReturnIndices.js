function twoNumberReturnIndices(nums, target) {
    const numMap = newMap();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        // Check if the difference is already in the map
        if (numMap.has(diff)) {
            // If it is, return the indices
            return [numMap.get(diff), i];
        }
        
        // Otherwise, add the number and its index to the map
        numMap.set(nums[i], i);
    }
    
    // If no solution is found, return an empty array
    return [];
}

console.log(twoNumberReturnIndices ([1, 5, 2, 7], 8));           // Expected output: [0, 3]
console.log(twoNumberReturnIndices ([20, 1, 5, 2, 11], 3));      // Expected output: [1, 3]
console.log(twoNumberReturnIndices ([3, 2, 4], 6));              // Expected output: [1, 2]

overall time complexity = O(n)
