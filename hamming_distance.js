const hammingDistance = function(x, y) {
    const binaryXOR = x ^ y;
    
    return [...binaryXOR.toString(2)].reduce((sum, item) => {
        return item === '1' ? sum + 1 : sum;
    }, 0); 
};
