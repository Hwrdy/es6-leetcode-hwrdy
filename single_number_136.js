/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const single = nums.reduce((obj, item) => {
        if (obj[item]) {
            delete obj[item];
        } else {
            obj[item] = true;
        }
        
        return obj;
    }, {});
    
    return +Object.keys(single)[0];
};
