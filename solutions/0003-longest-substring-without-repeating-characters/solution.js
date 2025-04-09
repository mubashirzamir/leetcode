/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let lo = 0
    let hi = 0
    let current = 0
    let result = 0
    let seen = new Set()

    while (hi < s.length) {
        while (seen.has(s[hi])) {
            seen.delete(s[lo])
            current--
            lo++
        }

        seen.add(s[hi])
        current++
        hi++
        result = Math.max(result, current)
    }

    return result
};
