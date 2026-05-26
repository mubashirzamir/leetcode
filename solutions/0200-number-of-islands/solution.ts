function numIslands(grid: string[][]): number {
    // Multi-source DFS, increment result everytime we start a new source

    let result = 0
    let points = []

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') points.push([i, j])
        }
    }

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    const dfs = (i: number, j: number) => {
        grid[i][j] = '2'

        for (const [x, y] of dirs) {
            const newI = i + x
            const newJ = j + y

            // Out of bounds
            if (newI < 0 || newI >= grid.length || newJ < 0 || newJ >= grid[0].length) continue
            if (grid[newI][newJ] === '0' || grid[newI][newJ] === '2') continue
            dfs(newI, newJ) 
        }
    }

    for (const [x, y] of points) {
        if (grid[x][y] === '2') continue

        dfs(x, y)
        result++
    }

    return result
};
