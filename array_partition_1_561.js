/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    if (!(nums && nums.length >= 1)) {
        return 0;
    }
    
    const sortedNums = nums.sort((a, b) => a - b);
    
    let sum = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (i % 2 === 0 && i + 1 < nums.length) {
            sum += Math.min(sortedNums[i], sortedNums[i+1]);
        }
    }
    
    return sum;
};
