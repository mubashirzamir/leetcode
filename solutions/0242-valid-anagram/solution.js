/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let sMap = {}
    let tMap = {}

    for (c of s) {
        if (sMap[c]) sMap[c]++
        else sMap[c] = 1
    }

    for (c of t) {
        if (tMap[c]) tMap[c]++
        else tMap[c] = 1
    }

    for (const [key, value] of Object.entries(sMap)) {
        if (tMap[key] !== sMap[key]) {
            return false
        }
    }

    return true
};
