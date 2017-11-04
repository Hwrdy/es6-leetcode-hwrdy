/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const points = ops.reduce((result, item, index) => {
        if (item === '+') {
            if (result.length > 0) {
                const last1 = result[result.length - 1];
                const last2 = result[result.length - 2];
                
                result.push(last1 + last2);
            }
        } else if (item === 'D') {
            if (result.length > 0) {
                result.push(result[result.length - 1] * 2);
            }
        } else if (item === 'C') {
            if (result.length > 0) {
                result = result.slice(0, result.length - 1);
            }
        } else {
            result.push(+item);
        }  
        
        return result;
    }, []);
    
    return points.reduce((sum, item) => {
        return sum + item;
    }, 0);
};
