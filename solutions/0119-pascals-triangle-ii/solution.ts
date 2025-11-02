function getRow(rowIndex: number): number[] {
    let triangle: number[][] = []

    for (let i = 0; i <= rowIndex; i++) {
        let row = []

        for (let j = 0; j <= i; j++) {
            if (i - 1 < 0 || j === 0 || j === i) row.push(1)
            else row.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
        }

        triangle.push(row)
    }

    return triangle[rowIndex]
};
