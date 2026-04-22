function search(nums: number[], target: number): number {
    let lo = 0
    let hi = nums.length

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2)

        if (nums[mid] === target) return mid

        if (target > nums[mid]) lo = mid + 1
        else hi = mid -1
    }

    return -1
};
