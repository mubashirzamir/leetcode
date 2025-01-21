/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let seen = new Set()
    let current = 0
    let result = 0
    let lo = 0
    let hi = 0

    while (hi < s.length) {
        const c = s.charAt(hi)

        if (seen.has(c)) {
            while (s.charAt(lo) !== c) {
                seen.delete(s.charAt(lo))
                lo++
                current--
            }

            lo++
        } else {
            seen.add(c)
            result = Math.max(result, ++current)
        }

        hi++
    }

    return result
};
