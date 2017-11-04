/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if (s && s.length > 0) {
        let i = s.length;
        let result = '';
        
        while (i > 0) {
            result += s.substring(i-1, i);
            i-= 1;
        }
        
        return result;
    }
    
    return s;
};
