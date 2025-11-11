function search(nums: number[], target: number): number {
    let lo = 0, hi = nums.length - 1

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2)

        if (nums[mid] === target) return mid
        if (nums[lo] === target) return lo
        if (nums[hi] === target) return hi

        if (target < nums[mid] && target > nums[lo]) {
            hi = mid - 1
        } else if (target > nums[mid] && target < nums[hi]) {
            lo = mid + 1
        } else {
            // The critical point is between lo and hi and target lies between.
            // Example cases:
            // 4, 5, 6, 7, 0, 1, 2 - target = 0
            // 4, 5, 6, 7, 8, 1, 2 - target = 8

            if (target > nums[mid] && target > nums[hi]) {
                lo++
            } else if (target < nums[mid] && target < nums[lo]) {
                hi--
            }
        }
    }

    return -1
};
