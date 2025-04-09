/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // reverse string, detect space and return
    s = s.trim().split('').reverse()
    let result = 0

    for (c of s) {
        if (c === ' ') return result
        result++
    }

    return result
};
