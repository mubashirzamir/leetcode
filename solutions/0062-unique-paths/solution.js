/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const arr = Array.from({ length: m }, (v, i) => Array.from({ length: n }, (v, i) => 0))
    arr[m - 1][n - 1] = 1

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 && j === n - 1) continue
            arr[i][j] = get(arr, i + 1, j) + get(arr, i, j + 1)
        }
    }


    return arr[0][0]
};

const get = (arr, i, j) => {
    if (arr.length - 1 < i || arr[0].length - 1 < j) return 0

    return arr[i][j]
}
