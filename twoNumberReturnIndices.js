function twoNumberReturnIndices(nums, target) {
    const numMap = newMap();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        // Check difference is already in map
        if (numMap.has(diff)) {
            // If it is, return indices
            return [numMap.get(diff), i];
        }
        
        // Otherwise, add number and its index to map
        numMap.set(nums[i], i);
    }
    
    // If no solution seen, return empty array
    return [];
}

console.log(twoNumberReturnIndices ([1, 5, 2, 7], 8));           // Expected output: [0, 3]
console.log(twoNumberReturnIndices ([20, 1, 5, 2, 11], 3));      // Expected output: [1, 3]
console.log(twoNumberReturnIndices ([3, 2, 4], 6));              // Expected output: [1, 2]

overall time complexity = O(n) 
