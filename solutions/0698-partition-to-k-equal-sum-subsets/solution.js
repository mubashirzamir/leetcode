/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    const subsetTotal = nums.reduce((acc, curr) => acc + curr, 0)
    if (subsetTotal % k !== 0) return false

    nums = nums.sort((a, b) => b - a)

    const target = subsetTotal / k
    let used = Array.from({ length: nums.length }, (v, i) => false)

    const backtrack = (i, k, curr) => {
        if (k === 0) return true // all subsets created
        if (curr === target) return backtrack(0, k - 1, 0) // one subset created

        for (let j = i; j < nums.length; j++) {
            if (j > 0 && !used[j - 1] && nums[j] === nums[j - 1]) continue
            if (used[j]) continue
            used[j] = true
            if (backtrack(j + 1, k, curr + nums[j])) return true
            used[j] = false
        }

        return false
    }

    return backtrack(0, k, 0)
};
