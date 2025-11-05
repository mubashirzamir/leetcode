function threeSum(nums: number[]): number[][] {
    // sort
    // three pointers
    // fix one pointer i
    // j = i + 1, k = nums.length - 1
    // converge until nums[i] + nums[j] + nums[k] !=== 0
    nums = nums.sort((a, b) => a - b)
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue // why

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            const a = nums[i]
            const b = nums[j]
            const c = nums[k]

            if (a + b + c === 0) {
                result.push([a, b, c])
                while (nums[j] === b) {
                    j++
                }

                while (nums[k] === c) {
                    k--
                }
            } else if (a + b + c > 0) {
                k--
            } else {
                j++
            }
        }
    }

    return result
};
