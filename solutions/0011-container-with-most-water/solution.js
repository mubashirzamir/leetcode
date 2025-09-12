/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let result = 0
    let l = 0
    let r = height.length - 1

    while (l < r) {
        result = Math.max(result, (r - l) * Math.min(height[l], height[r]))
        if (height[l] <= height[r]) l++
        else r--
    }

    return result
};
