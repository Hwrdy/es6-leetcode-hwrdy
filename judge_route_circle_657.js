/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
    const result = [...moves].reduce((position, move) => {
        let x = position[0];
        let y = position[1];
        
        switch (move) {
            case 'U':
                y += 1;
                break;
            case 'D':
                y -= 1;
                break;
            case 'R':
                x += 1;
                break;
            case 'L':
                x -= 1;
                break;
            default:
                break;
        }
        
        return [x, y];
    }, [0, 0]);
    
    return (result[0] === 0 && result[1] === 0);
};
