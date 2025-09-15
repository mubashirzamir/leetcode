/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const lookup = new Map()
    let used = Array.from({ length: board.length }, (v, i) =>
        Array.from({ length: board[i].length }, (v, i) => false)
    )
    const dirs = [
        [0, 1],  // right
        [1, 0],  // down
        [0, -1], // left
        [-1, 0]  // up
    ]

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let positions = lookup.get(board[i][j]) || []
            positions.push([i, j])
            lookup.set(board[i][j], positions)
        }
    }

    const dfs = (start, index) => {
        if (index === word.length - 1) return true

        const i = start[0]
        const j = start[1]
        used[i][j] = true
        index++

        for (dir of dirs) {
            const newI = i + dir[0]
            const newJ = j + dir[1]
            if (newI >= 0
                && newI < board.length
                && newJ >= 0
                && newJ < board[newI].length
                && !used[newI][newJ]
                && board[newI][newJ] === word.charAt(index)
            ) {
                if (dfs([newI, newJ], index)) return true
            }
        }

        used[i][j] = false

        return false
    }

    const starts = lookup.get(word.charAt(0))

    if (!starts) return false

    for (start of starts) {
        used = Array.from({ length: board.length }, (v, i) =>
            Array.from({ length: board[i].length }, (v, i) => false)
        )

        if (dfs(start, 0, used)) return true
    }

    return false
};
