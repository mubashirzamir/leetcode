/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    if (!grid || grid.length === 0) return 0

    let max = -Infinity
    let fresh = 0
    let rotten = []

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) fresh++
            else if (grid[i][j] === 2) rotten.push([i, j, 0])
        }
    }

    if (fresh === 0) return 0

    const dirs = [
        [0, 1], // right
        [0, -1], // left
        [1, 0], // down
        [-1, 0], // up
    ]

    while (rotten.length !== 0) {
        const [x, y, minute] = rotten.shift()

        for (dir of dirs) {
            const i = x + dir[0]
            const j = y + dir[1]
            const newMinute = minute + 1

            if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== 1) {
                continue
            }

            grid[i][j] = 2
            fresh--
            max = Math.max(max, newMinute)
            rotten.push([i, j, newMinute])
        }
    }

    return (fresh > 0 || max === -Infinity) ? -1 : max
};
