/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bits = 0;
    let value = num;
    
    while (value !== 0) {
        value = value >> 1;
        bits += 1;
    }
    
    let max = 0;
    
    for (let i = 0; i < bits; i += 1) {
        max += Math.pow(2, i);
    }
    
    return max ^ num;
};
