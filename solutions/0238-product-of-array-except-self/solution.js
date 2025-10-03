/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let fArr = []
    let start = 1

    for (n of nums) {
        fArr.push(start)
        start = start * n
    }

    let bArr = []
    start = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        bArr[i] = start
        start = start * nums[i]
    }

    let result = []

    for (let i = 0; i < nums.length; i++) {
        result[i] = fArr[i] * bArr[i]
    }

    return result
};
