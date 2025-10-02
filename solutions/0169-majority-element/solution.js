/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // runtime constraints?
    // space constraints?
    let map = new Map()
    let result = { num: nums[0], instances: 1 }

    for (let n of nums) {
        if (map.has(n)) {
            m = map.get(n) + 1
            map.set(n, m)
            if (m > result.instances) {
                result.num = n
                result.instances = m
            }
        } else {
            map.set(n, 1)
        }
    }

    return result.num
};
