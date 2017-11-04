/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const kind = {};
    
    for (let i = 0; i < candies.length; i += 1) {
        if (kind[candies[i]] === undefined) {
            kind[candies[i]] = true;
        }
    }
    
    const max = candies.length / 2;
    const kindsLength = Object.keys(kind).length;
    
    return kindsLength > max ? max : kindsLength;
};
