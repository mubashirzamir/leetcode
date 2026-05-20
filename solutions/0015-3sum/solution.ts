function threeSum(nums: number[]): number[][] {
    // Three pointer approach learned from AlgoJS

    nums.sort((a, b) => a - b)
    let result = []

    for (let i = 0; i < nums.length - 2; i++) {
        // Avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum > 0) k--
            else if (sum < 0) j++
            else {
                result.push([nums[i], nums[j], nums[k]])

                // Avoid duplicates
                do { j++ } while (j < k && nums[j] === nums[j - 1])
                do { k-- } while (k > j && nums[k] === nums[k + 1])
            }
        }
    }

    return result
};
