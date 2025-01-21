/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let queue = []
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]


    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j])
            } else {
                mat[i][j] = Infinity
            }
        }
    }

    while (queue.length !== 0) {
        const [x, y] = queue.shift()

        for (dir of dirs) {
            const newX = x + dir[0]
            const newY = y + dir[1]

            if (0 <= newX && newX < mat.length &&
                0 <= newY && newY < mat[0].length &&
                mat[newX][newY] > mat[x][y] + 1) {
                mat[newX][newY] = mat[x][y] + 1
                queue.push([newX, newY]);
            }
        }
    }

    return mat
};
