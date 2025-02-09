/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let result = []
    let [previousStart, previousEnd] = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i]

        // if (previousStart >= currentStart) {
        //     previousStart = currentStart
        // }

        if (previousEnd >= currentStart) {
            previousEnd = Math.max(previousEnd, currentEnd)
        } else {
            result.push([previousStart, previousEnd])
            previousStart = currentStart
            previousEnd = currentEnd
        }
    }

    result.push([previousStart, previousEnd])

    return result
};
