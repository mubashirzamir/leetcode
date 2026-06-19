function canMakeSquare(grid: string[][]): boolean {
    for (let r = 0; r < grid.length - 1; r++) {
        for (let c = 0; c < grid[0].length - 1; c++) {
            const colors = [
                grid[r][c],
                grid[r][c + 1],
                grid[r + 1][c],
                grid[r + 1][c + 1],
            ]
            const whiteCount = colors.filter(x => x === 'W').length
            if (whiteCount >= 3 || whiteCount <= 1) return true
        }
    }
    return false
}
