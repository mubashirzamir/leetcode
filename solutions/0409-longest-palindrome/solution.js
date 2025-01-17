/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let set = new Set()
    let length = 0

    for (c of s) {
        if (set.has(c)) {
            length += 2
            set.delete(c)
        } else {
            set.add(c)
        }
    }

    return length + (set.size > 0)
};

