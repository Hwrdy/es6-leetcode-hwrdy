/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (s && s.length > 0) {
        const splitted = s.split(' ');
        
        return splitted.map((item, index) => {
            let reverse = '';
            let i = item.length;
            
            while (i > 0) {
                reverse += item.substring(i - 1, i);
                i -= 1;
            }
            
            return reverse;
        }).join(' ');
    }
    
    return s;
};
