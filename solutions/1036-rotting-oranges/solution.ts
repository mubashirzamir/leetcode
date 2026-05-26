function orangesRotting(grid: number[][]): number {
    // BFS
    // Every level of BFS is one minute
    // Return number of levels

    let queue = []
    let ones = 0
    let result = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) queue.push([i, j, 0])
            else if (grid[i][j] === 1) ones++
        }
    }

    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    while (queue.length !== 0) {
        const [i, j, level] = queue.shift()

        for (const [x, y] of dirs) {
            const newI = i + x
            const newJ = j + y

            // Out of bounds
            if (newI < 0 || newI >= grid.length || newJ < 0 || newJ >= grid[0].length) continue
            if (grid[newI][newJ] === 0 || grid[newI][newJ] === 2) continue

            ones--
            grid[newI][newJ] = 2
            queue.push([newI, newJ, level + 1])
        }

        if (queue.length === 0) result = level
    }

    return ones === 0 ? result : -1
};
