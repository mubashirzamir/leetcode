function maxSubArray(nums: number[]): number {
    // left and right pointer
    // keep incrementing right pointer
    // if right pointer > current sum, then left pointer increments to right and right++

    let left = 0
    let right = 1
    let max = nums[0]
    let current = nums[0]

    while (right < nums.length) {
        if (nums[right] > current && current < 0) {
            left = right
            current = nums[left]
        } else {
            current += nums[right]
        }

        right++
        max = Math.max(max, current)
    }

    return max
};
