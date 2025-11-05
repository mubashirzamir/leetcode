function updateMatrix(mat: number[][]): number[][] {
    // bfs from all zeroes.
    let queue: number[][] = []

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) queue.push([i, j])
            else mat[i][j] = Number.POSITIVE_INFINITY
        }
    }

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    while (queue.length !== 0) {
        const [i, j] = queue.shift()

        for (const d of dirs) {
            const newI = i + d[0]
            const newJ = j + d[1]

            // out of bounds
            if (newI < 0 || newI > mat.length - 1 || newJ < 0 || newJ > mat[0].length - 1) continue

            // if new position is not zero && we find a new minimum
            // update distance and push into the queue
            if (mat[newI][newJ] !== 0 && mat[newI][newJ] > mat[i][j] + 1) {
                mat[newI][newJ] = mat[i][j] + 1
                queue.push([newI, newJ])
            }
        }
    }

    return mat
};
