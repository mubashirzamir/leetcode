function numIslands(grid: string[][]): number {
    // Get position of all ones
    // DFS in a loop, increment+ every time you come out of the loop until all ones are visited

    const ones = []

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") ones.push([i, j])
        }
    }

    const visited = Array.from({ length: grid.length }, () => (
        Array.from({ length: grid[0].length }, () => false)
    ))

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    const dfs = (i, j) => {
        visited[i][j] = true

        for (const [x, y] of dirs) {
            const newI = x + i
            const newJ = y + j

            // skip out of bounds
            if (newI < 0 || newI > grid.length - 1 || newJ < 0 || newJ > grid[0].length - 1) continue
            // skip visited
            if (visited[newI][newJ]) continue
            // skip zeroes
            if (grid[newI][newJ] === "0") continue

            dfs(newI, newJ)
        }
    }

    let result = 0

    for (const [i, j] of ones) {
        if (visited[i][j]) continue
        dfs(i, j)
        result++
    }

    return result
};
