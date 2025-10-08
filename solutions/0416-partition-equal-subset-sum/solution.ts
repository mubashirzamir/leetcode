function canPartition(nums: number[]): boolean {
    let k = 2
    const subsetTotal = nums.reduce((acc, curr) => acc + curr, 0)
    if (subsetTotal % k !== 0) return false

    nums = nums.sort((a, b) => b - a)
    const target = subsetTotal / k
    let map = new Map()

    const evaluate = (index = 0, currSum = 0) => {
        const state = index + "|" + currSum

        if (map.has(state)) return map.get(state)
        if (currSum === target) return true
        if (currSum > target) return false
        if (index >= nums.length) return false

        const result = evaluate(index + 1, currSum) || evaluate(index + 1, currSum + nums[index])
        map.set(state, result)
        
        return result
    }


    return evaluate()
};
