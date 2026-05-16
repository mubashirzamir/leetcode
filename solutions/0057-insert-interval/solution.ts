function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let i = 0;

    // 1. BEFORE newInterval
    // [1,2] vs [5,7] -> no overlap, push
    // next [3,6] vs [5,7] -> overlap, stop
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // 2. MERGE overlaps
    // [3,6] vs [5,8] -> merge into [3,8]
    // next [10,12] vs [3,8] -> no overlap, stop
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    // 3. PUSH merged interval
    // merged interval = [3,8]
    result.push(newInterval);

    // 4. AFTER newInterval
    // [10,12] vs [3,8] -> no overlap, push
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}
