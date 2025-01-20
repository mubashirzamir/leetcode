/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = []

    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            return [...result, newInterval, ...intervals.slice(i, intervals.length)]
        } else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i])
        } else {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0])
            newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        }
    }

    return [...result, newInterval]
};
