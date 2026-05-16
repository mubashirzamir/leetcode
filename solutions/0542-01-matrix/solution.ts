function updateMatrix(mat: number[][]): number[][] {
    // Multi-source BFS
    let rowLength = mat.length
    let colLength = mat[0].length
    let queue = []
    let result = Array.from({ length: mat.length }, () => Array.from({ length: mat[0].length }, () => 0))


    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (mat[i][j] === 0) queue.push([i, j])
            else result[i][j] = Infinity
        }
    }

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]


    while (queue.length !== 0) {
        const current = queue.shift()
        const i = current[0]
        const j = current[1]

        for (const d of dirs) {
            const newI = d[0] + i
            const newJ = d[1] + j

            // Out of bounds
            if (newI < 0 || newI >= rowLength || newJ < 0 || newJ >= colLength) continue

            if (result[newI][newJ] > result[i][j] + 1) {
                result[newI][newJ] = result[i][j] + 1
                queue.push([newI, newJ])
            }
        }
    }

    return result
};
