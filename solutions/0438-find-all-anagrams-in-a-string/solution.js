/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let result = []
    let baseMap = new Map()

    for (c of p) {
        if (!baseMap.has(c)) baseMap.set(c, 1)
        else baseMap.set(c, baseMap.get(c) + 1)
    }

    let sMap = new Map()
    let left = 0
    let right = 0


    while (left <= right && right < s.length) {
        let c = s.charAt(right)

        if (!sMap.has(c)) sMap.set(c, 1)
        else sMap.set(c, sMap.get(c) + 1)

        if (right - left === p.length - 1 && areMapsEqual(sMap, baseMap)) result.push(left)
        if (right - left >= p.length - 1) {
            let cDel = s.charAt(left)
            sMap.set(cDel, sMap.get(cDel) - 1)
            if (sMap.get(cDel) === 0) sMap.delete(cDel)
            left++
        }

        right++
    }


    return result
};

const areMapsEqual = (p, q) => {
    for ([key, value] of q) {
        if (!p.has(key) || p.get(key) !== value) return false
    }

    return true
}
