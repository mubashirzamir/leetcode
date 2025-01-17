/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map()

    for (n of nums) {
        map.set(n, (map.get(n) || 0) + 1)
    }

    return new Map([...map].sort((a, b) => b[1] - a[1])).keys().next().value
};
