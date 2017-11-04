/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const allNums = [].concat(...nums);
    const max = r * c;
    
    if (max > allNums.length) {
        return nums;
    }
    
    const result = [];
    for (let i = 0; i < r; i += 1) {
        result.push(allNums.slice(i * c, i * c + c));
    }
    
    return result;
};
