/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []
    let current = []

    const backtrack = (sum, index) => {
        if (sum === target) {
            result.push([...current])
            return
        }

        if (sum > target) {
            return
        }

        for (let i = index; i < candidates.length; i++) {
            current.push(candidates[i])
            backtrack(sum + candidates[i], i)
            current.pop()
        }
    }

    backtrack(0, 0)

    return result
};
