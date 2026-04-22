function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const queue = [[sr, sc]]

    const visited = Array.from({ length: image.length }, () =>
        Array.from({ length: image[0].length }, () => false)
    )

    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    while (queue.length !== 0) {
        const [i, j] = queue.shift()
        const currColor = image[i][j]

        for (const d of dirs) {
            const newI = i + d[0]
            const newJ = j + d[1]

            // Out of bounds
            if (newI < 0 || newI >= image.length || newJ < 0 || newJ >= image[0].length || visited[newI][newJ]) continue
            // Push into queue
            if (currColor === image[newI][newJ]) queue.push([newI, newJ])
        }

        image[i][j] = color
        visited[i][j] = true
    }   

    return image

};
