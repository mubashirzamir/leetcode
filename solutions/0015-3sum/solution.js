/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sorted = nums.sort((a, b) => a - b)
    let result = []

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) {
            continue
        }

        let target = -sorted[i]
        let l = i + 1
        let r = sorted.length - 1

        while (l < r) {
            if (sorted[l] + sorted[r] > target) {
                r--
            } else if (sorted[l] + sorted[r] < target) {
                l++
            } else {
                result.push([sorted[i], sorted[l], sorted[r]])
                do { l++ } while (sorted[l] === sorted[l - 1])
                do { r-- } while (sorted[r] === sorted[r + 1])
            }
        }
    }

    return result
};

