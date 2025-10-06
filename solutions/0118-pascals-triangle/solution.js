/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // 1
    // 1 1
    // 1 2 1
    // 1 3 3 1
    // 1 4 6 4 1
    let result = []

    for (let i = 0; i < numRows; i++) {
        let row = []

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) row[j] = 1
            else row[j] = get(result, i - 1, j - 1) + get(result, i - 1, j)
        }

        result.push(row)
    }

    return result
};

const get = (arr, i, j, def = 0) => {
    try {
        return arr[i][j] || def
    } catch (e) {
        return def
    }
}
