function orangesRotting(grid: number[][]): number {
    let rottenPositions = []
    let visited = []
    let fresh = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (visited[i] === undefined) visited[i] = []

            visited[i][j] = {
                rotTime: -1,
                iteration: -1
            }

            let rotTime = -1
            switch (grid[i][j]) {
                case 0:
                    rotTime = 0
                    break
                case 1:
                    fresh++
                    rotTime = Infinity
                    break
                case 2:
                    rottenPositions.push([i, j])
                    rotTime = 0
                    break
            }

            visited[i][j].rotTime = rotTime
        }
    }

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let rotten = 0

    const bfs = (i, j, iteration) => {
        let queue = [[i, j]]

        while (queue.length !== 0) {
            const [p, q] = queue.shift()
            visited[p][q].iteration = iteration

            for (const d of dirs) {
                const newI = p + d[0]
                const newJ = q + d[1]

                // Skip out of bounds
                if (newI < 0 || newI > grid.length - 1 || newJ < 0 || newJ > grid[0].length - 1) continue
                // Skip empty cell
                if (grid[newI][newJ] === 0) continue
                // Skip visited
                if (visited[newI][newJ].iteration === iteration) continue
                // Skip rotten: BFS will handle them anyways
                if (grid[newI][newJ] === 2) continue

                if (visited[newI][newJ].rotTime === Infinity) rotten++
                visited[newI][newJ].rotTime = Math.min(visited[newI][newJ].rotTime, visited[p][q].rotTime + 1)

                queue.push([newI, newJ])
            }
        }
    }

    let iteration = 0
    for (const [i, j] of rottenPositions) {
        bfs(i, j, iteration++)
    }

    if (rotten < fresh) return -1

    let result = -Infinity
    for (let i = 0; i < visited.length; i++) {
        for (let j = 0; j < visited[0].length; j++) {
            result = Math.max(result, visited[i][j].rotTime)
        }
    }

    return result
};
