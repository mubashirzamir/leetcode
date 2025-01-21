/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let origin = [0, 0]
    let result = new Map

    for (const [x, y] of points) {
        result.set([x, y], Math.sqrt(Math.pow(origin[0] - x, 2) + Math.pow(origin[1] - y, 2)))
    }

    return [...result.entries()].sort((a, b) => a[1] - b[1]).slice(0, k).map(r => r[0])
};
