function insert(intervals: number[][], newInterval: number[]): number[][] {
    let result = []

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] > newInterval[1]) {
            return [...result, newInterval, ...intervals.slice(i, intervals.length)]
        } else if (intervals[i][1] < newInterval[0]) {
            result.push(intervals[i])
        } else {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0])
            newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        }
    }

    return [...result, newInterval]
};
