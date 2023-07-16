/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let totalProduct = 1
    let zeroIndex = []
    let result = []

    for (let i = 0; i < nums.length; i++) {
        nums[i] !== 0 
            ? totalProduct *= nums[i]
            : zeroIndex.push(i)
    }

    if (zeroIndex.length > 0) {
        let arr = new Array(nums.length).fill(0)

        if (zeroIndex.length === 1) {
            arr[zeroIndex[0]] = totalProduct
        }

        return arr
    }

    for (let i = 0; i < nums.length; i++) {
        result.push(totalProduct/nums[i])
    }

    return result
};
