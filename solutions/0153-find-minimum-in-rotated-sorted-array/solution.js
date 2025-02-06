/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0
    let r = nums.length - 1

    while (l < r) {
        const mid = Math.floor((l + r) / 2)

        // min is on right
        if (nums[mid] > nums[r]) l = mid + 1
        // min is on left
        else r = mid
    }

    return nums[l]
};
