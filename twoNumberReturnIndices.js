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

overall time complexity = O(n)
