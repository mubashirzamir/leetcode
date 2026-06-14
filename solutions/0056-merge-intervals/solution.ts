function merge(intervals: number[][]): number[][] {
    // Merge Intervals
    // Time: O(n log n) — dominated by sort
    // Space: O(n)

    // Sort by start time so overlapping intervals are always adjacent
    intervals.sort((a, b) => a[0] - b[0])

    const result = []
    let current = intervals[0]

    for (let i = 0; i < intervals.length - 1; i++) {
        let [curStart, curEnd] = current
        let [nextStart, nextEnd] = intervals[i + 1]

        if (curEnd >= nextStart && curEnd < nextEnd) {
            // Partial overlap — next interval extends beyond current, so stretch the right bound
            // e.g. current [1,4], next [3,6] → merged [1,6]
            current = [curStart, nextEnd]
        } else if (curEnd >= nextStart && curEnd >= nextEnd) {
            // Full containment — next interval is entirely within current, swallow it silently
            // e.g. current [1,6], next [2,4] → still [1,6]
            continue
        } else {
            // No overlap — current interval is finalised, next becomes the new current
            // e.g. current [1,3], next [5,8] → push [1,3], track [5,8]
            result.push(current)
            current = [nextStart, nextEnd]
        }
    }

    // Push the last tracked interval (loop stops one short so it's never pushed inside)
    result.push(current)

    return result
};
