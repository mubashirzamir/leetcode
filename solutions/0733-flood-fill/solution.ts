function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const newImage = Array.from({ length: image.length }, (_, i) =>
        Array.from({ length: image[0].length }, (_, j) => image[i][j])
    )

    const visited = Array.from({ length: image.length }, () =>
        Array.from({ length: image[0].length }, () => false)
    )

    const dirs = [
        [0, 1],  // right
        [0, -1], // left
        [1, 0],  // down,
        [-1, 0], // up
    ]

    const dfs = (i, j) => {
        visited[i][j] = true

        for (const d of dirs) {
            const newI = i + d[0]
            const newJ = j + d[1]

            if (newI < 0 || newI > image.length - 1 || newJ < 0 || newJ > image[0].length - 1) continue
            if (visited[newI][newJ]) continue

            if (image[i][j] === image[newI][newJ]) {
                newImage[newI][newJ] = color
                dfs(newI, newJ)
            }
        }
    }

    dfs(sr, sc)
    newImage[sr][sc] = color

    return newImage
};
