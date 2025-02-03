/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || grid.length === 0) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let seen = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
    let islands = 0;

    const dirs = [
        [0, 1], // right
        [0, -1], // left
        [1, 0], // down
        [-1, 0], // up
    ];

    const dfs = (i, j) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == 0 || seen[i][j]) {
            return;
        }

        seen[i][j] = true;

        for (let dir of dirs) {
            dfs(i + dir[0], j + dir[1]);
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1 && !seen[i][j]) {
                dfs(i, j);
                islands++;
            }
        }
    }

    return islands;
};
