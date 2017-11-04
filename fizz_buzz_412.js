/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {    
    const result = [];
    
    for (let i = 1; i <= n; i += 1) {
        const fizz = i % 3 === 0;
        const buzz = i % 5 === 0;
        
        if (fizz && buzz) {
            result.push('FizzBuzz');
        } else if (fizz) {
            result.push('Fizz');
        } else if (buzz) {
            result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    
    return result;
};
