// find missing number in array
function findMissingNumberInArray(nums, maxNumber) {
    // Calculate the expected sum of numbers from 1 to maxNumber
    const expectedSum = maxNumber * (maxNumber + 1) / 2;
    
    // Calculate the actual sum of elements in the given nums array
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    
    // The missing number is difference between expected sum and actual sum
    const missingNumber = expectedSum - actualSum;
    
    return missingNumber;
}

// Test cases
console.log(findMissingNumberInArray([3, 4, 1, 2], 5));          // Expected output: 5
console.log(findMissingNumberInArray([9, 4, 3, 2, 6, 1, 7, 8, 10], 10));  // Expected output: 5
console.log(findMissingNumberInArray([2, 3, 4, 5], 5));          // Expected output: 1
console.log(findMissingNumberInArray([1, 2, 3, 4, 5], 6));       // Expected output: 6

overall time complexity = O(n)
