/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let start1 = 1
    let res = []

    for (let i = 0; i < nums.length; i++) {
        res.push(start1)
        start1 = start1 * nums[i]
    }


    let start2 = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = start2 * res[i]
        start2 = start2 * nums[i]
    }

    return res
};
