function maxSubArray(nums: number[]): number {
    // two pointers
    // left pointer resets if sum < right pointer number
    // result = nums.slice(left, right + 1)

    let left = 0, right = 0, max = Number.NEGATIVE_INFINITY, curr = 0

    while (right < nums.length) {
        if (curr < 0 && curr < nums[right]) {
            left = right
            curr = 0
        }

        curr += nums[right]
        max = Math.max(max, curr)
        right++
    }

    return max
};
