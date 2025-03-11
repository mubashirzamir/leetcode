/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = []

    const dfs = (index = 0, current = []) => {
        result.push(current)
        for (let i = index; i < nums.length; i++) {
            dfs(i + 1, current.concat(nums[i]))
        }
    }

    dfs()

    return result
};
