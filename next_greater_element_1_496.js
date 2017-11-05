/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    return findNums.reduce((result, item) => {
        const idx = nums.findIndex(element => element === item);
        let greater = -1;
        
        for (let i = idx + 1; i < nums.length; i += 1) {
            if (nums[i] > item) {
                greater = nums[i];
                break;
            }
        }
        
        result.push(greater);
        
        return result;
    }, []);
};
