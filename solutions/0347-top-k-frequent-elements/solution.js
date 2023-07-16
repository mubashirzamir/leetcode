/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = []
    let map = new Map()

    for (n of nums) {
        map.set(n, (map.get(n) || 0) + 1)
    }

    const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))

    for (item of sortedMap.keys()) {
        if (result.length < k) {
            result.push(item)
        }
    }

    return result
};
