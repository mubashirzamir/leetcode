function search(nums: number[], target: number): number {
    // find pivot point

    let left = 0
    let right = nums.length - 1
    let pivot = 0

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        
        // pivot is to the right of mid
        if (nums[mid] > nums[right]) left = mid + 1
        // pivot is at mid or to the left
        else right = mid

    }

    pivot = left

    // once pivot has been found, perform binary search

    // case 01: binary search on left hand side
    if (nums[nums.length - 1] < target) {
        left = 0
        right = pivot - 1
    }
    // case 02: binary search on right hand side
    else {
        left = pivot
        right = nums.length - 1
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] < target) left = mid + 1
        else if (nums[mid] > target) right = mid - 1
        else return mid
    }

    return -1
};
