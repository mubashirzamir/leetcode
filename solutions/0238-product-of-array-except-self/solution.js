/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const size = nums.length
    let left = Array(size).fill(1)
    let right = Array(size).fill(1)
    let result = Array(size).fill(1)

    const help = (arr, index) => {
        if (arr[index] === undefined) return 1
        return arr[index]
    }

    for (let i = 0; i < size; i++) {
        left[i] = help(left, i - 1) * help(nums, i - 1)
        right[size - 1 - i] = help(right, size - i) * help(nums, size - i)
    }

    for (let i = 0; i < size; i++) {
        result[i] = left[i] * right[i]
    }

    return result
};
