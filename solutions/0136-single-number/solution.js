/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0

    for (n of nums) {
        result ^= n
    }

    return result
};
