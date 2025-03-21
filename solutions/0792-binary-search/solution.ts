function search(nums: number[], target: number): number {
    let lo = 0
    let hi = nums.length - 1

    while (lo <= hi) {
        const mid = Math.floor((lo+hi) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) hi = mid -1 
        else lo = mid + 1
    }

    return -1
};
