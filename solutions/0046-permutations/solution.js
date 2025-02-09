/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const length = nums.length
    let result = []

    const dfs = (nums, current = []) => {
        if (current.length === length) {
            result.push([...current])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            current.push(nums[i])
            dfs([...nums.slice(0, i), ...nums.slice(i + 1, nums.length)], current)
            current.pop()
        }
    }

    dfs(nums, [])

    return result
};
