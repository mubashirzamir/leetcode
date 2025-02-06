var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    // Find the pivot point (smallest element)
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[r]) l = mid + 1;
        else r = mid
    }

    const pivot = l;
    l = 0;
    r = nums.length - 1;

    // Determine which subarray to search
    if (target >= nums[pivot] && target <= nums[r]) {
        l = pivot;
    } else {
        r = pivot - 1;
    }

    // Perform binary search on the appropriate subarray
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }

    return -1;
};
