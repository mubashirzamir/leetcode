/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let totalItems = matrix.length * matrix[0].length
    let result = []
    let visited = Array.from({ length: matrix.length }, (v, i) =>
        Array.from({ length: matrix[i].length }, (v, i) => false)
    )

    const directions = [
        [0, 1],  // right 0
        [1, 0],  // down 1
        [0, -1], // left 2
        [-1, 0]  // up 3
    ]

    let dir = 0

    const traverse = (i, j) => {
        if (result.length === totalItems) return

        visited[i][j] = true
        result.push(matrix[i][j])

        if (shouldChangeDirections(i + directions[dir][0], j + directions[dir][1])) {
            dir = (dir + 1) % 4
        }

        traverse(i + directions[dir][0], j + directions[dir][1])
    }


    const shouldKeepGoing = (i, j) => {
        return i >= 0 && i <= matrix.length - 1 & j >= 0 && j <= matrix[0].length - 1 && !visited[i][j]
    }

    const shouldChangeDirections = (i, j) => {
        return !shouldKeepGoing(i, j)
    }

    traverse(0, 0)

    return result
};


