/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let last = n % 2;
    let result = true;
    let num = n;
    
    while (num > 0) {
        num = num >> 1;
        
        const current = num % 2;
        
        if (last === current) {
            result = false;
            break;
        }
        
        last = current;
    }
    
    return result;
};
