/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const c = grid && grid[0] && grid[0].length;
    const r = grid && grid.length;
    
    let sum = 0;
    
    if (c && r) {
        for (let i = 0; i < r; i += 1) {
            for (let j = 0; j < c; j += 1) {
                if (grid[i][j] === 1) {
                    if (j - 1 < 0 || grid[i][j-1] === 0) {
                        sum += 1;
                    }
                    
                    if (j + 1 >= c || grid[i][j+1] === 0) {
                        sum += 1;
                    }
                    
                    if (i - 1 < 0 || grid[i - 1][j] === 0) {
                        sum += 1;
                    }
                    
                    if (i + 1 >= r  || grid[i + 1][j] === 0) {
                        sum += 1;
                    }
                }
            }
        }
    }
    
    return sum;
};
